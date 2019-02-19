const express = require('express')
const router = express.Router()
const jwtdecode = require('jwt-decode')
const jwt = require('jsonwebtoken')
const db = require('../../config/dbConfig')
const jwtKey = process.env.JWT_SECRET
/**
 * @api {post} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and user ID.
 */
router.post('/register', async (req, res) => {
  //req.body.idToken / accessToken
  let userInfo = jwtdecode(req.body.idToken)
  let accessInfo = jwtdecode(req.body.accessToken)
  console.log(accessInfo)
  // jwt.verify(req.body.accessToken, jwtKey, (err, decoded) => {
  //   if (err) return console.log(err)

  //   console.log(userInfo)
  // })
  try {
    //check if sub exists in users
    let findUser = await db('users')
      .where({ sub_id: userInfo.sub })
      .first()
    if (findUser) {
      //we good?
      res.status(200).send('welcome back')
    } else {
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
})
// router.post('/register', checkEmail, async (req, res) => {
//   try {
//     let ids = await db('users')
//       .insert(req.body)
//       .returning('id')
//     let user = await db('users')
//       .where({ id: ids[0] })
//       .select('firstname', 'lastname', 'email', 'id', 'img_url')
//       .first()
//     res.status(201).json({ message: 'user created', user })
//   } catch (err) {
//     res.status(500).json(err)
//   }
// })

/**
 * @api {post} /api/users/addMember Add a Club Member
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and newMember object.
 */
router.post('/addMember', getInfoFromToken, async (req, res, next) => {
  req.body.club_id = req.userInfo.club_id
  try {
    let ids = await db('users')
      .insert(req.body)
      .returning('id')
    let newMember = await db('users')
      .where({ id: ids[0] })
      .first()
    res.status(201).json({ message: `member added`, newMember })
  } catch (err) {
    res.status(500).json(err)
  }
})
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
// async function checkUsername(req, res, next) {
//   if (req.body.username) {
//     let name = await db('users')
//       .where({ username: req.body.username })
//       .first()
//     if (name && name.id != req.params.id) {
//       res.status(400).json({ message: `username in use` })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// }

// async function checkEmail(req, res, next) {
//   if (req.body.email) {
//     let email = await db('users')
//       .where({ email: req.body.email })
//       .first()
//     if (email && email.id != req.params.id) {
//       res.status(400).json({ message: `email in use` })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// }

async function getInfoFromToken(req, res, next) {
  try {
    let tokenInfo = jwtdecode(req.headers.authorization)
    let findUser = await db('users')
      .where({ sub_id: tokenInfo.sub })
      .first()
    if (findUser) {
      req.userInfo = findUser
      next()
    } else {
      res.status(404).json({ message: `user not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

async function checkParamMatchesUser(req, res, next) {
  if (req.params.id == req.userInfo.id) {
    next()
  } else {
    res.status(400).json({ message: `access denied, you are not this user` })
  }
}
// async function hashPassword(req, res, next) {
//   if (req.body.password) {
//     req.body.password = bcrypt.hashSync(req.body.password, 12)
//     next()
//   } else {
//     next()
//   }
// }

module.exports = router
