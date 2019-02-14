const express = require("express");
const router = express.Router();

const db = require("../../config/dbConfig");

/**
 * @api {get} /api/clubs Request List of Clubs
 * @apiGroup clubs
 *
 * @apiSuccess {Array} List of Club objects.
 */

router.get("/", async (req, res) => {
  try {
    let clubs = await db("clubs");
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @api {get} /api/clubs/:id Request Club by ID
 * @apiGroup clubs
 *
 * @apiSuccess {Object} single club object.
 */
router.get("/:id", checkClubExists, (req, res) => {
  res.status(200).json(req.body.club);
});

/**
 * @api {get} /api/clubs/:id/sections Request Sections of a Club
 * @apiGroup clubs
 *
 * @apiSuccess {Array} List of section objects.
 */
router.get("/:id/sections", checkClubExists, async (req, res) => {
  try {
    let sections = await db("clubs")
      .join("sections", "clubs.id", "=", "sections.club_id")
      .where({ "clubs.id": req.params.id })
      .select(
        "sections.id",
        "sections.title",
        "sections.body",
        "sections.img_url",
        "sections.img_placement",
        "sections.order",
        "sections.club_id"
      );
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json(err);
  }
});

//middleware Functions
async function checkClubExists(req, res, next) {
  try {
    let club = await db("clubs")
      .where({ id: req.params.id })
      .first();
    if (!club) {
      res.status(404).json({ message: `club id: ${req.params.id} not found` });
    } else {
      req.body.club = club;
      next();
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = router;
