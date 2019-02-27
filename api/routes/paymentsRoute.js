const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')

const db = require('../../config/dbConfig')
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')

router.post('/', validateToken, getInfoFromToken, (req, res) => {
  let plan = req.body.subscription.plan

  stripe.customers
    .create({
      email: req.body.email,
      source: req.body.id,
    })
    .then(customer => {
      stripe.subscriptions
        .create({
          customer: customer.id,
          items: [{ plan }],
        })
        .then(charge => {
          let subInfo = {
            user_id: req.userInfo.id,
            customer: charge.customer,
            subscription: charge.id,
            status: charge.status,
            plan: charge.plan.id,
            product: charge.plan.product,
            type: charge.plan.nickname,
          }
          db('subscriptions')
            .insert(subInfo)
            .then(inserted => {
              res.status(200).json({ inserted })
            })
        })
    })
    .catch(err => {
      console.log('Error:', err)
      res.status(500).json({ error: 'Purchase Failed' })
    })
})

router.delete('/cancel', validateToken, getInfoFromToken, async (req, res) => {
  let sub = await db('subscriptions')
    .where({ user_id: req.userInfo.id, status: 'active' })
    .first()
  stripe.subscriptions.update(
    sub.subscription,
    { cancel_at_period_end: true },
    function(err, confirmation) {
      //asynchronously called
      if (err) {
        res.status(500).json({ error: err })
      }
      res.status(200).json(confirmation)
    }
  )
})

//example of subscription call to use in login later...
router.get('/subscription', async (req, res) => {
  stripe.subscriptions.retrieve('sub_EbRMXm0tPJ9Vam', function(
    err,
    subscription
  ) {
    // asynchronously called
    if (err) {
      console.log('error', err)
    }

    res.status(200).json({
      status: subscription.status,
      type: subscription.plan.nickname,
      plan: subscription.plan.id,
      product: subscription.plan.product,
      customer: subscription.customer,
    })
  })
})

module.exports = router
