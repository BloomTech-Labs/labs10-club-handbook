const express = require('express')
const router = express.Router()
const requestIp = require('request-ip')
const db = require('../../config/dbConfig')
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')

/**
 * @api {get} /api/clubs Request List of Clubs
 * @apiGroup clubs
 * @apiDeprecated [not needed, not protected, TODO remove]
 * @apiSuccess {Array} Clubs List of Club objects.
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
 * @apiDescription token holder must be member of club
 * @apiHeader authorization access token
 * @apiSuccess {Object} Club single club object.
 */
router.get(
  '/:id',
  validateToken,
  checkClubExists,
  getInfoFromToken,
  checkUserIsMember,
  (req, res) => {
    res.status(200).json(req.clubInfo)
  }
)

/**
 * @api {get} /api/clubs/:id/members get member list of a club
 * @apiGroup members
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {Array} members Array of members objects
 */
router.get(
  '/:id/members',
  validateToken,
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
 * @api {post} /api/clubs/:id/checkMember verify member by email
 * @apiGroup members
 * @apiDescription no token req, returns boolean
 * @apiParam {string} email add to body.email (REQ)
 * @apiSuccess {string} message confirmation message
 * @apiSuccess {boolean} isMember true or false
 */
router.post('/:id/checkMember', async (req, res, next) => {
  try {
    let member = await db('users')
      .where({ email: req.body.email, club_id: req.params.id })
      .first()
    if (member) {
      res.status(200).json({ message: `member exists in club`, isMember: true })
    } else {
      res
        .status(400)
        .json({ message: `member does not exist in club`, isMember: false })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {post} /api/clubs/:id/signature sign a handbook
 * @apiGroup members
 * @apiDescription token owner must belong to club in param
 * @apiHeader authorization access token
 * @apiParam {string} signature what they type into signature field (REQ)
 * @apiSuccess (Success 201) {string} message confirmation message
 */
router.post(
  '/:id/signature',
  validateToken,
  getInfoFromToken,
  checkClubExists,
  checkUserIsMember,
  async (req, res, next) => {
    let clientIP = requestIp.getClientIp(req)
    let { iss, sub, iat, exp, azp } = req.decoded
    let insertInfo = {
      user_id: req.userInfo.id,
      iss,
      sub,
      iat,
      exp,
      azp,
      ip: clientIP,
      signature: req.body.signature,
    }
    try {
      await db('signatures').insert(insertInfo)
      await db('users')
        .where({ sub_id: sub })
        .update({ signed: true })
      res.status(201).json({ message: `signature successful` })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/clubs Create a new Club
 * @apiGroup clubs
 * @apiDescription token owner must not be part of a club
 * @apiHeader authorization access token
 * @apiParam {string} name add to body.name (REQ)
 * @apiSuccess (Success 201) {string} message success message
 * @apiSuccess (Success 201) {object} club club object
 */
router.post(
  '/',
  validateToken,
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
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {string} message success message
 * @apiSuccess {object} club club object
 */
router.patch(
  '/:id',
  validateToken,
  checkClubExists,
  getInfoFromToken,
  checkUserOwnsClub,
  async (req, res, next) => {
    console.log('do we get here?')
    try {
      console.log(req.body)
      let count = await db('clubs')
        .where({ id: req.params.id })
        .update(req.body)
      console.log(count)
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
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {string} message success message
 * @apiSuccess {integer} id id of deleted club
 */

// will not delete if sections for club exist via PSQL constraint
router.delete(
  '/:id',
  validateToken,
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
 * @apiGroup sections
 * @apiDescription token holder must be member of club
 * @apiHeader authorization access token
 * @apiSuccess {Array} sections List of section objects.
 */

router.get(
  '/:id/sections',
  validateToken,
  checkClubExists,
  getInfoFromToken,
  checkUserIsMember,
  async (req, res) => {
    try {
      let sections = await db('clubs')
        .join('sections', 'clubs.id', '=', 'sections.club_id')
        .where({ 'clubs.id': req.params.id })
        .orderBy('order')
      res.status(200).json(sections)
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/clubs/:id/sections Add Sections to a Club
 * @apiGroup sections
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess (Success 201) {string} message success message
 * @apiSuccess (Success 201) {object} section section object
 */

router.post(
  '/:id/sections',
  validateToken,
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
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {string} message success message
 * @apiSuccess {object} section section object
 */

router.patch(
  '/:id/sections/:sectionId',
  validateToken,
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
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {object} confirmation message
 */

router.delete(
  '/:id/sections',
  validateToken,
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
 * @apiDescription only owner of club can access
 * @apiHeader authorization access token
 * @apiSuccess {string} message success message
 * @apiSuccess {integer} id id of deleted section
 */

router.delete(
  '/:id/sections/:sectionId',
  validateToken,
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
