const express = require("express");
const router = express.Router();

const db = require("../../config/dbConfig");

router.get("/", async (req, res) => {
  try {
    let clubs = await db("clubs");
    res.status(200).json(clubs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let club = await db("clubs")
      .where({ id: req.params.id })
      .first();
    if (!club) {
      res.status(404).json({ message: `club id: ${req.params.id} not found` });
    } else {
      res.status(200).json(club);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id/sections", async (req, res) => {
  try {
    let sections = await db("clubs")
      .join("sections", "clubs.id", "=", "sections.club_id")
      .where({ "clubs.id": req.params.id });
    res.status(200).json(sections);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
