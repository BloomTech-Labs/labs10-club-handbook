const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')

const db = require('../../config/dbConfig')

/**
 * @api {post} /api/users/register Add a User
 * @apiGroup users
 *
 * @apiSuccess {Object} Success message and user ID.
 */
router.post('/register', async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 12)
    let ids = await db('users').insert(req.body)
    res.status(201).json({ message: 'user created', id: ids[0] })
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
    let users = await db('users').select('username', 'email')
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json(err)
  }
})

// STRIPE STATEMENT DESCRIPTOR
router.post('/billing', async (req, res) => {
  console.log(req.body)
  try {
    let { status } = await stripe.charges.create({
      amount: 1000,
      currency: 'usd',
      description: 'example charge',
      source: 'tok_visa', //only visa cards
    })
    res.json({ status })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
})

module.exports = router
