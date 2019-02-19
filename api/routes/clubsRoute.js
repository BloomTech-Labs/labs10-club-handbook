const express = require('express')
const router = express.Router()
const jwtdecode = require('jwt-decode')
const jwt = require('jsonwebtoken')
const db = require('../../config/dbConfig')

/**
 * @api {get} /api/clubs Request List of Clubs
 * @apiGroup clubs
 *
 * @apiSuccess {Array} List of Club objects.
 */

router.get('/', async (req, res) => {
  try {
    let clubs = await db('clubs')
    res.status(200).json(clubs)
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {get} /api/clubs/:id Request Club by ID
 * @apiGroup clubs
 *
 * @apiSuccess {Object} single club object.
 */
//TODO - confirm ownership auth
router.get(
  '/:id',
  checkClubExists,
  getInfoFromToken,
  checkUserIsMember,
  (req, res) => {
    res.status(200).json(req.clubInfo)
  }
)

/**
 * @api {get} /api/clubs/:id get member list of a club
 * @apiGroup clubs
 *
 * @apiSuccess {Array} array of members objects
 */
//TODO - confirm ownership auth
router.get(
  '/:id/members',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res) => {
    try {
      let members = await db('users').where({ club_id: req.clubInfo.id })
      res.status(200).json(members)
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/clubs Create a new Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} single club object.
 */
//TODO - confirm ownership auth
router.post(
  '/',
  getInfoFromToken,
  checkUserIsntClubbed,
  async (req, res, next) => {
    try {
      let toInsert = req.body
      toInsert.user_id = req.userInfo.id

      let ids = await db('clubs')
        .insert(toInsert)
        .returning('id')
      let club = await db('clubs')
        .where({ id: ids[0] })
        .first()
      await db('users')
        .where({ id: req.userInfo.id })
        .update({ club_id: ids[0], admin: true })
      res.status(201).json({ message: `club created`, club })
    } catch (err) {
      res.status(500).json({ message: `error in route`, err })
    }
  }
)

/**
 * @api {patch} /api/clubs/:id Update a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} updated club object
 */
//TODO- check user on token is admin for club ID param
router.patch(
  '/:id',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res, next) => {
    try {
      let count = await db('clubs')
        .where({ id: req.params.id })
        .update(req.body)
      if (count) {
        //get updated object to return
        let updated = await db('clubs')
          .where({ id: req.params.id })
          .first()
        res
          .status(200)
          .json({ message: `club info updated successfully`, club: updated })
      } else {
        res
          .status(404)
          .json({ message: `club of id: ${req.params.id} not found` })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {delete} /api/clubs/:id Delete a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} confirmation message and id
 */
//TODO - confirm ownership auth
// will not delete if sections for club exist via PSQL constraint
router.delete(
  '/:id',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res, next) => {
    try {
      let count = await db('clubs')
        .where({ id: req.params.id })
        .delete()

      //remove users club_id
      await db('users')
        .where({ id: req.userInfo.id })
        .update({ club_id: null, admin: false })
      if (count) {
        res.status(200).json({ message: `club deleted`, id: req.params.id })
      } else {
        res
          .status(404)
          .json({ message: `club of id: ${req.params.id} not found` })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {get} /api/clubs/:id/sections Request Sections of a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Array} List of section objects.
 */
//TODO - confirm ownership auth
router.get(
  '/:id/sections',
  checkClubExists,
  getInfoFromToken,
  checkUserIsMember,
  async (req, res) => {
    try {
      let sections = await db('clubs')
        .join('sections', 'clubs.id', '=', 'sections.club_id')
        .where({ 'clubs.id': req.params.id })
        .select(
          'sections.id',
          'sections.title',
          'sections.body',
          'sections.img_url',
          'sections.img_placement',
          'sections.order',
          'sections.club_id'
        )
      res.status(200).json(sections)
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/clubs/:id/sections Add Sections to a Club
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and created section object
 */
//TODO - confirm ownership auth
router.post(
  '/:id/sections',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res) => {
    try {
      req.body.club_id = req.params.id
      let section = await db('sections')
        .insert(req.body)
        .returning('*')

      res.status(201).json({ message: `section created`, section: section[0] })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {patch} /api/clubs/:id/sections/:sectionId Update info of a Section
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and updated section object
 */
//TODO - confirm ownership auth
router.patch(
  '/:id/sections/:sectionId',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  checkSectionBelongsToClub,
  async (req, res, next) => {
    try {
      let section = await db('sections')
        .where({ id: req.params.sectionId })
        .update(req.body)
        .returning('*')

      res.status(200).json({ message: `section updated`, section: section[0] })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {delete} /api/clubs/:id/sections Delete ALL sections of a club
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message
 */
//TODO - confirm ownership auth
router.delete(
  '/:id/sections',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res, next) => {
    try {
      let count = await db('sections')
        .where({ club_id: req.params.id })
        .delete()
      if (count) {
        res.status(200).json({
          message: `sections deleted for club of id: ${req.params.id}`,
        })
      } else {
        res.status(404).json({
          message: `no sections found for club of id: ${req.params.id}`,
        })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {delete} /api/clubs/:id/sections/:sectionId Delete a section by sectionId
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and id
 */
//TODO - confirm ownership auth
router.delete(
  '/:id/sections/:sectionId',
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  checkSectionBelongsToClub,
  async (req, res, next) => {
    try {
      let count = await db('sections')
        .where({ id: req.params.sectionId })
        .delete()
      if (count) {
        res.status(200).json({
          message: `section of id: ${req.params.sectionId} deleted`,
          id: req.params.sectionId,
        })
      } else {
        res
          .status(404)
          .json({ message: `section of id: ${req.params.sectionId} not found` })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

//middleware Functions
async function checkClubExists(req, res, next) {
  try {
    let club = await db('clubs')
      .where({ id: req.params.id })
      .first()
    if (!club) {
      res.status(404).json({ message: `club id: ${req.params.id} not found` })
    } else {
      req.clubInfo = club
      next()
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

async function getInfoFromToken(req, res, next) {
  try {
    let tokenInfo = jwtdecode(req.headers.authorization)
    let findUser = await db('users')
      .where({ sub_id: tokenInfo.sub })
      .first()
    if (findUser) {
      req.userInfo = findUser
      next()
    } else {
      res.status(404).json({ message: `user not found` })
    }
  } catch (err) {
    res.status(500).json({ message: `error in mw`, err, tokenInfo })
  }
}

async function checkUserOwnsClub(req, res, next) {
  if (req.clubInfo.user_id == req.userInfo.id) {
    next()
  } else {
    res.status(400).json({ message: `this club does not belong to you` })
  }
}

async function checkUserIsMember(req, res, next) {
  if (req.clubInfo.id == req.userInfo.club_id) {
    next()
  } else {
    res.status(400).json({ message: `you do not belong to this club` })
  }
}

async function checkUserIsntClubbed(req, res, next) {
  if (!req.userInfo.club_id) {
    next()
  } else {
    res.status(400).json({ message: `you are already in a club` })
  }
}

async function checkSectionBelongsToClub(req, res, next) {
  try {
    let sectionInfo = await db('sections')
      .where({ id: req.params.sectionId })
      .first()
    if (sectionInfo) {
      if (sectionInfo.club_id == req.clubInfo.id) {
        next()
      } else {
        res.status(400).json({ message: `section does not belong to club` })
      }
    } else {
      res.status(404).json({ message: `section not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = router
