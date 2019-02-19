const express = require('express')
const router = express.Router()

const db = require('../../config/dbConfig')

/**
 * @api {get} /api/settings Get list of Settings
 * @apiGroup settings
 *
 * @apiSuccess {object} lists of colors, fonts, and img_placements
 */
router.get('/', async (req, res) => {
  try {
    let colors = await db('colors')
    let fonts = await db('fonts')
    let img_placements = await db('img_placement')
    res.status(200).json({ colors, fonts, img_placements })
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
