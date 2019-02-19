const express = require('express')
const router = express.Router()
const jwtdecode = require('jwt-decode')
const jwt = require('jsonwebtoken')
const db = require('../../config/dbConfig')
// const jwtKey = process.env.JWT_SECRET
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')

// const env_secret = jwtKey.split(',').join('\n')

/**
 * @api {post} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and user ID.
 */
router.post('/register', async (req, res) => {
  let userInfo = jwtdecode(req.body.idToken)

  jwt.verify(
    req.body.accessToken,
    env_secret,
    {
      algorithms: ['RS256'],
      audience: 'https://club-handbook.herokuapp.com/',
      issuer: 'https://club-handbook.auth0.com/',
    },

    async (err, decoded) => {
      if (err) {
        res.status(400).json({ message: 'invalid token', error: err })
      } else {
        try {
          //check if sub exists in users
          let findUser = await db('users')
            .where({ sub_id: userInfo.sub })
            .first()
          if (findUser) {
            //we good?
            res.status(200).send('welcome back')
          } else {
            //add new user
            let userToInsert = {
              email: userInfo.email,
              firstname: userInfo.given_name,
              lastname: userInfo.family_name,
              img_url: userInfo.picture,
              sub_id: userInfo.sub,
            }
            await db('users').insert([userToInsert])
            res.status(200).send('welcome')
          }
        } catch (err) {
          res.status(500).json(err)
        }
      }
    }
  )
})

/**
 * @api {post} /api/users/addMember Edit a Club Member
 * @apiGroup members
 *
 * @apiSuccess {Object} Success message and user object.
 */
router.post(
  '/addMember',
  validateToken,
  getInfoFromToken,
  checkUserHasClub,
  async (req, res, next) => {
    req.body.club_id = req.userInfo.club_id
    try {
      let ids = await db('users')
        .insert(req.body)
        .returning('id')
      let newMember = await db('users')
        .where({ id: ids[0] })
        .first()
      res.status(201).json({ message: `member added`, user: newMember })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/users/addMember/:id Edit a Club Member
 * @apiGroup members
 *
 * @apiSuccess {Object} Success message and updated user object.
 */
router.patch(
  '/addMember/:id',
  validateToken,
  getInfoFromToken,
  checkMemberBelongsToUsersClub,
  async (req, res, next) => {
    //check user on token owns club member is assigned to
    try {
      await db('users')
        .where({ id: req.params.id })
        .update(req.body)
      let updated = await db('users')
        .where({ id: req.params.id })
        .first()
      res.status(200).json({ message: `update successful`, user: updated })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/users/addMember/:id Delete a Club Member
 * @apiGroup members
 *
 * @apiSuccess {Object} Success message and id of deleted user.
 */
router.delete(
  '/addMember/:id',
  validateToken,
  getInfoFromToken,
  checkMemberBelongsToUsersClub,
  async (req, res, next) => {
    try {
      await db('users')
        .where({ id: req.params.id })
        .delete()
      res.status(200).json({ message: 'member deleted', id: req.params.id })
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
      'firstname',
      'lastname',
      'email',
      'id',
      'img_url',
      'club_id'
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
router.get(
  '/:id',
  validateToken,
  getInfoFromToken,
  checkParamMatchesUser,
  async (req, res) => {
    try {
      let user = await db('users')
        .where({ id: req.params.id })
        .select('firstname', 'lastname', 'email', 'id', 'img_url', 'club_id')
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
  }
)

/**
 * @api {patch} /api/users/:id Update User by ID
 * @apiGroup users
 *
 * @apiSuccess {Object} updated user info
 */
//TODO- param ID must match ID on token
router.patch(
  '/:id',
  validateToken,
  getInfoFromToken,
  checkParamMatchesUser,
  async (req, res) => {
    try {
      await db('users')
        .where({ id: req.params.id })
        .update(req.body)

      let user = await db('users')
        .where({ id: req.params.id })
        .select('firstname', 'lastname', 'email', 'id', 'img_url', 'club_id')
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
 * @apiSuccess {Object} confirmation message and id
 */
//TODO - param ID must match ID on token
router.delete(
  '/:id',
  validateToken,
  getInfoFromToken,
  checkParamMatchesUser,
  async (req, res, next) => {
    try {
      let count = await db('users')
        .where({ id: req.params.id })
        .delete()
      if (count) {
        res.status(200).json({
          message: `successful removal of user of ID: ${req.params.id}`,
          id: req.params.id,
        })
      } else {
        res
          .status(404)
          .json({ message: `user of ID:  ${req.params.id} not found` })
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

// defined middleware functions

async function checkParamMatchesUser(req, res, next) {
  if (req.params.id == req.userInfo.id) {
    next()
  } else {
    res.status(400).json({ message: `access denied, you are not this user` })
  }
}

async function checkUserHasClub(req, res, next) {
  if (req.userInfo.club_id) {
    next()
  } else {
    res.status(400).json({ message: `you have no club to add members to` })
  }
}

async function checkMemberBelongsToUsersClub(req, res, next) {
  try {
    let member = await db('users')
      .where({ id: req.params.id })
      .first()
    let club = await db('clubs')
      .where({ user_id: req.userInfo.id })
      .first()
    if (member.club_id == req.userInfo.club_id && club) {
      // user owns club
      next()
    } else {
      //no access
      res
        .status(400)
        .json({ message: `access denied, user does not belong to your club` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = router
