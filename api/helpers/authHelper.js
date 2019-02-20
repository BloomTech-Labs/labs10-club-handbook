const jwt = require('jsonwebtoken')
const db = require('../../config/dbConfig')
const jwtKey = process.env.JWT_SECRET

const env_secret = jwtKey.split(',').join('\n')

async function validateToken(req, res, next) {
  jwt.verify(
    req.headers.authorization,
    env_secret,
    {
      algorithms: ['RS256'],
      audience: 'https://club-handbook.herokuapp.com/',
      issuer: 'https://club-handbook.auth0.com/',
    },

    (err, decoded) => {
      if (err) {
        res.status(400).json({ message: `token invalid`, error: err })
      } else {
        req.decoded = decoded
        next()
      }
    }
  )
}

async function getInfoFromToken(req, res, next) {
  try {
    // let tokenInfo = jwtdecode(req.headers.authorization)
    let findUser = await db('users')
      .where({ sub_id: req.decoded.sub })
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

module.exports = {
  validateToken,
  getInfoFromToken,
}
