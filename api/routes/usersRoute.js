const express = require('express')
const router = express.Router()
const jwtdecode = require('jwt-decode')
const jwt = require('jsonwebtoken')
const db = require('../../config/dbConfig')
const jwtKey = process.env.JWT_SECRET
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')
const { updateSubInfo } = require('../helpers/subHelper')
const env_secret = jwtKey.split(',').join('\n')

/**
 * @api {post} /api/users/register Add User/Log-In (Auth0)
 * @apiGroup users
 * @apiParam {string} tokens both idToken and accessToken send in body
 * @apiDescription this is intended for club owners registering and signing in throught auth0, this is not intended for adding members or magic-link login
 * @apiSuccess (Success 200 or 201) {string} message 'welcome' or 'welcome back'
 * @apiSuccess (Success 200 or 201) {integer} id id of user
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
      }
      try {
        let findUser = await db('users')
          .where({ sub_id: userInfo.sub })
          .first()
        if (findUser) {
          // check for subscription info
          let sub = await db('subscriptions')
            .where({ user_id: findUser.id })
            .first()
          if (sub) {
            updateSubInfo(sub.subscription)
          }
          res.status(200).json({ message: 'welcome back', user: findUser })
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
          let newUser = await db('users')
            .where({ sub_id: userInfo.sub })
            .first()
          res.status(201).send({ message: 'welcome', user: newUser })
        }
      } catch (err) {
        res.status(500).json(err)
      }
    }
  )
})

/**
 * @api {post} /api/users/register-magiclink Email/Magic Link Login
 * @apiGroup users
 * @apiParam {string} tokens both idToken and accessToken send in body
 * @apiDescription this is intended for magic-link login, their email and club_id have previously been added by club owner through /users/addMember endpoint.
 * @apiSuccess (Success 200 or 201) {text} n/a 'welcome' or 'welcome back'
 */
router.post('/register-magiclink', async (req, res) => {
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
            //user has logged in before
            res.status(200).json({ message: `welcome back`, user: findUser })
          } else {
            //first time log-in
            let invitedUser = await db('users')
              .where({ email: userInfo.email, sub_id: null })
              .first()
            //find the staged- member entry and insert sub_id
            if (invitedUser) {
              let infoToUpdate = {
                img_url: userInfo.picture,
                sub_id: userInfo.sub,
              }
              let ids = await db('users')
                .where({ email: userInfo.email, sub_id: null })
                .update(infoToUpdate)
                .returning('id')
              let updatedUser = await db('users')
                .where({ id: ids[0] })
                .first()
              res.status(201).json({ message: `welcome`, user: updatedUser })
            }
          }
        } catch (err) {
          res.status(500).json(err)
        }
      }
    }
  )
})

/**
 * @api {get} /api/users/getInfoFromToken Get Users, club, and section info
 * @apiGroup users
 * @apiHeader authorization access token
 * @apiSuccess {Object} user User info object.
 * @apiSuccess {Object} club Club info object.
 * @apiSuccess {Array} sections Array of Section info objects.
 */
router.get(
  '/getInfoFromToken',
  validateToken,
  getInfoFromToken,
  async (req, res) => {
    try {
      let user = req.userInfo
      let club = await db('clubs')
        .where({ id: user.club_id })
        .first()
      let sections = await db('sections')
        .where({ club_id: user.club_id })
        .orderBy('order')
      res.status(200).json({ user, club, sections })
    } catch (err) {
      res.status(500).json(err)
    }
  }
)

/**
 * @api {post} /api/users/addMember Add a Club Member
 * @apiGroup members
 * @apiDescription user on token must own a club to add members
 * @apiHeader authorization access token
 * @apiParam {string} email attach to body.email (req)
 * @apiSuccess (Success 201) {String} message Success message and user object.
 * @apiSuccess (Success 201) {object} user created member object
 */
router.post(
  '/addMember',
  validateToken,
  getInfoFromToken,
  checkUserHasClub,
  checkMemberLimit,
  async (req, res, next) => {
    req.body.club_id = req.userInfo.club_id
    req.body.email = req.body.email.toLowerCase()

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
 * @api {patch} /api/users/addMember/:id Edit a Club Member
 * @apiGroup members
 * @apiDescription member must belong to the token users club
 * @apiHeader authorization access token
 * @apiSuccess {String} message Success message and user object.
 * @apiSuccess {object} user updated member object
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
 * @api {delete} /api/users/addMember/:id Delete a Club Member
 * @apiGroup members
 * @apiDescription member must belong to the token users club
 * @apiHeader authorization access token
 * @apiSuccess {String} message Success message and user object.
 * @apiSuccess {integer} id id of deleted member
 * */
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
 * @apiDeprecated [not needed, not protected, TODO remove]
 * @apiGroup users
 * @apiSuccess {Array} List of user objects.
 */
router.get('/', async (req, res) => {
  try {
    let users = await db('users')
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

/**
 * @api {get} /api/users/:id Get User by ID
 * @apiGroup users
 * @apiDescription can only acces info of user on token
 * @apiHeader authorization access token
 * @apiSuccess {Object} user user object
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
 * @apiDescription can only change info of user on token
 * @apiHeader authorization access token
 * @apiSuccess {String} message Success message and user object.
 * @apiSuccess {object} user updated user object
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
 * @apiDescription can only delete user on token
 * @apiHeader authorization access token
 * @apiSuccess {String} message Success message and user object.
 * @apiSuccess {integer} id id of deleted user
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

async function checkMemberLimit(req, res, next) {
  let plans = {
    free: 'plan_EanP4aFWnkzGTC',
    smallBiz: 'plan_EanQzBshDkH9Iu',
    enterprise: 'plan_EanRarp8r1YnYC',
  }
  let memberLimit = {
    free: 5,
    smallBiz: 20,
    enterprise: 500,
  }

  try {
    let subInfo = await db('subscriptions')
      .where({ user_id: req.userInfo.id })
      .first()
    let members = await db('users').where({ club_id: req.userInfo.club_id })

    if (subInfo) {
      if (subInfo.plan === plans.free && members.length <= memberLimit.free) {
        next()
      } else if (
        subInfo.plan === plans.smallBiz &&
        members.length <= memberLimit.smallBiz
      ) {
        next()
      } else if (
        subInfo.plan === plans.enterprise &&
        members.length <= memberLimit.enterprise
      ) {
        next()
      } else {
        res.status(400).json({
          message: `your club is at capacity for your subscription plan`,
        })
      }
    } else {
      // no sub on file
      if (members.length <= memberLimit.free) {
        next()
      } else {
        res
          .status(400)
          .json({ message: `add a subscription to increase club capacity` })
      }
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

module.exports = router
