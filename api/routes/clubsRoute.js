const express = require('express')
const router = express.Router()

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
router.get('/:id', checkClubExists, (req, res) => {
  res.status(200).json(req.body.club)
})

/**
 * @api {post} /api/clubs Create a new Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} single club object.
 */
//TODO - confirm ownership auth
router.post('/', async (req, res, next) => {
  try {
    let ids = await db('clubs')
      .insert(req.body)
      .returning('id')
    let club = await db('clubs')
      .where({ id: ids[0] })
      .first()
    res.status(201).json({ message: `club created`, club })
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {patch} /api/clubs/:id Update a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} updated club object
 */
//TODO- check user on token is admin for club ID param
router.patch('/:id', async (req, res, next) => {
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
})

/**
 * @api {delete} /api/clubs/:id Delete a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Object} confirmation message and id
 */
//TODO - confirm ownership auth
// will not delete if sections for club exist via PSQL constraint
router.delete('/:id', async (req, res, next) => {
  try {
    let count = await db('clubs')
      .where({ id: req.params.id })
      .delete()
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
})

/**
 * @api {get} /api/clubs/:id/sections Request Sections of a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Array} List of section objects.
 */
//TODO - confirm ownership auth
router.get('/:id/sections', checkClubExists, async (req, res) => {
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
})

/**
 * @api {post} /api/clubs/:id/sections Add Sections to a Club
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and created section object
 */
//TODO - confirm ownership auth
router.post('/:id/sections', async (req, res) => {
  try {
    req.body.club_id = req.params.id
    let section = await db('sections')
      .insert(req.body)
      .returning('*')

    res.status(201).json({ message: `section created`, section: section[0] })
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {patch} /api/clubs/:id/sections/:sectionId Update info of a Section
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and updated section object
 */
//TODO - confirm ownership auth
router.patch('/:id/sections/:sectionId', async (req, res, next) => {
  try {
    let section = await db('sections')
      .where({ id: req.params.sectionId })
      .update(req.body)
      .returning('*')

    res.status(200).json({ message: `section updated`, section: section[0] })
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {delete} /api/clubs/:id/sections Delete ALL sections of a club
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message
 */
//TODO - confirm ownership auth
router.delete('/:id/sections', async (req, res, next) => {
  try {
    let count = await db('sections')
      .where({ club_id: req.params.id })
      .delete()
    if (count) {
      res
        .status(200)
        .json({ message: `sections deleted for club of id: ${req.params.id}` })
    } else {
      res
        .status(404)
        .json({ message: `no sections found for club of id: ${req.params.id}` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {delete} /api/clubs/:id/sections/:sectionId Delete a section by sectionId
 * @apiGroup sections
 *
 * @apiSuccess {object} confirmation message and id
 */
//TODO - confirm ownership auth
router.delete('/:id/sections/:sectionId', async (req, res, next) => {
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
})

//middleware Functions
async function checkClubExists(req, res, next) {
  try {
    let club = await db('clubs')
      .where({ id: req.params.id })
      .first()
    if (!club) {
      res.status(404).json({ message: `club id: ${req.params.id} not found` })
    } else {
      req.body.club = club
      next()
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = router
