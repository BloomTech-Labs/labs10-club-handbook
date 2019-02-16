const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')

const db = require('../../config/dbConfig')

/**
 * @api {post} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and user ID.
 */
router.post(
  '/register',
  checkUsername,
  checkEmail,
  hashPassword,
  async (req, res) => {
    try {
      let ids = await db('users')
        .insert(req.body)
        .returning('id')
      let user = await db('users')
        .where({ id: ids[0] })
        .select('username', 'firstname', 'lastname', 'email', 'id')
        .first()
      res.status(201).json({ message: 'user created', user })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {get} /api/users/register Get a List of Users
 * @apiGroup users
 *
 * @apiSuccess {Array} List of user objects.
 */
router.get('/', async (req, res) => {
  try {
    let users = await db('users').select(
      'username',
      'firstname',
      'lastname',
      'email',
      'id'
    )
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {get} /api/users/:id Get User by ID
 * @apiGroup users
 *
 * @apiSuccess {Object} user info
 */
//TODO- param ID must match ID on token
router.get('/:id', async (req, res) => {
  try {
    let user = await db('users')
      .where({ id: req.params.id })
      .select('username', 'firstname', 'lastname', 'email', 'id')
      .first()
    if (user) {
      res.status(200).json(user)
    } else {
      res
        .status(404)
        .json({ message: `user of ID:  ${req.params.id} not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {patch} /api/users/:id Update User by ID
 * @apiGroup users
 *
 * @apiSuccess {Object} updated user info
 */
//TODO- param ID must match ID on token
router.patch(
  '/:id',
  checkUsername,
  checkEmail,
  hashPassword,
  async (req, res) => {
    try {
      await db('users')
        .where({ id: req.params.id })
        .update(req.body)

      let user = await db('users')
        .where({ id: req.params.id })
        .select('username', 'firstname', 'lastname', 'email', 'id')
        .first()
      res.status(200).json({ message: `user updated`, user })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {delete} /api/users/:id Delete User by ID
 * @apiGroup users
 *
 * @apiSuccess {Object} confirmation message
 */
//TODO - param ID must match ID on token
router.delete('/:id', async (req, res, next) => {
  try {
    let count = await db('users')
      .where({ id: req.params.id })
      .delete()
    if (count) {
      res
        .status(200)
        .json({ message: `successful removal of user of ID: ${req.params.id}` })
    } else {
      res
        .status(404)
        .json({ message: `user of ID:  ${req.params.id} not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

// defined middleware functions
async function checkUsername(req, res, next) {
  if (req.body.username) {
    let name = await db('users')
      .where({ username: req.body.username })
      .first()
    if (name && name.id != req.params.id) {
      res.status(400).json({ message: `username in use` })
    } else {
      next()
    }
  } else {
    next()
  }
}

async function checkEmail(req, res, next) {
  if (req.body.email) {
    let email = await db('users')
      .where({ email: req.body.email })
      .first()
    if (email && email.id != req.params.id) {
      res.status(400).json({ message: `email in use` })
    } else {
      next()
    }
  } else {
    next()
  }
}
async function hashPassword(req, res, next) {
  if (req.body.password) {
    req.body.password = bcrypt.hashSync(req.body.password, 12)
    next()
  } else {
    next()
  }
}

module.exports = router
