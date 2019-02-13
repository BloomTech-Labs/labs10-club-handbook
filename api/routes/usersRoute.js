const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../config/dbConfig");

router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    let ids = await db("users").insert(req.body);
    res.status(201).json({ message: "user created", id: ids[0] });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    let users = await db("users").select("username", "email");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
