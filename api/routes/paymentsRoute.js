const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')

const db = require('../../config/dbConfig')
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')

router.post(
  '/addSubscription',
  validateToken,
  getInfoFromToken,
  async (req, res) => {
    let plan = req.body.subscription.plan

    let subOnDB = await db('subscriptions')
      .where({ user_id: req.userInfo.id })
      .first()

    if (!subOnDB) {
      try {
        let customer = await stripe.customers.create({
          email: req.body.email,
          source: req.body.id,
        })

        let charge = await stripe.subscriptions.create({
          customer: customer.id,
          items: [{ plan }],
        })

        let subInfo = {
          user_id: req.userInfo.id,
          customer: charge.customer,
          subscription: charge.id,
          status: charge.status,
          plan: charge.plan.id,
          product: charge.plan.product,
          type: charge.plan.nickname,
        }

        let inserted = await db('subscriptions').insert(subInfo)

        res.status(201).json({ message: `subscription created`, inserted })
      } catch (err) {
        res.status(500).json({ error: err })
      }
    } else {
      res.status(400).json({ message: `you already have a subscription` })
    }
  }
)

router.post(
  '/updateSubscription',
  validateToken,
  getInfoFromToken,
  async (req, res) => {
    let newPlan = req.body.subscription.plan

    try {
      let subInfo = await db('subscriptions')
        .where({ user_id: req.userInfo.id })
        .first()

      const subscription = await stripe.subscriptions.retrieve(
        subInfo.subscription
      )

      //changes sub but does not charge until new cycle
      const newSub = await stripe.subscriptions.update(subInfo.subscription, {
        cancel_at_period_end: false,
        items: [
          {
            id: subscription.items.data[0].id,
            plan: newPlan,
          },
        ],
      })

      let newInfo = {
        customer: newSub.customer,
        subscription: newSub.id,
        status: newSub.status,
        plan: newSub.plan.id,
        product: newSub.plan.product,
        type: newSub.plan.nickname,
      }

      await db('subscriptions')
        .where({ user_id: req.userInfo.id })
        .update(newInfo)

      res
        .status(200)
        .json({ message: `subscription updated`, type: newInfo.type })
    } catch (err) {
      res.status(500).json({ error: err })
    }
  }
)

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

module.exports = router
