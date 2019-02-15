const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const db = require("../../config/dbConfig");

/**
 * @api {post} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and user ID.
 */
router.post("/register", async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 12);
    let ids = await db("users").insert(req.body);
    res.status(201).json({ message: "user created", id: ids[0] });
  } catch (err) {
    res.status(500).json(err);
  }
});

/**
 * @api {get} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Array} List of user objects.
 */
router.get("/", async (req, res) => {
  try {
    let users = await db("users").select("username", "email");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
