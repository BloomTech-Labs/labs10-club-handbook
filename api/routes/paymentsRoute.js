const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')

const db = require('../../config/dbConfig')
const { validateToken, getInfoFromToken } = require('../helpers/authHelper')

/**
 * @api {post} /api/payments/addSubscription Add Sub Via Stripe
 * @apiGroup payments
 * @apiHeader authorization access token
 * @apiParam {object} body stripe payment info
 * @apiParam {object} subscription object in body, contains "plan" key/value pair
 * @apiDescription this is intended for use through the react-stripe-checkout system
 * @apiSuccess (Success 201) {string} message 'subscription created'
 */
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

/**
 * @api {post} /api/payments/updateSubscription Update existing subscription
 * @apiGroup payments
 * @apiHeader authorization access token
 * @apiParam {object} subscription object in body, contains "plan" key/value pair
 * @apiDescription sending the subscription.plan in the body will update their subscription to the new plan.  An invoice is created to bill/credit the pro-rated difference.
 * @apiSuccess {string} message 'subscription updated'
 * @apiSuccess {string} type nickname of new subscription
 */
router.post(
  '/updateSubscription',
  validateToken,
  getInfoFromToken,
  checkMemberSizeToDowngrade,
  async (req, res) => {
    let newPlan = req.body.subscription.plan

    try {
      let subInfo = await db('subscriptions')
        .where({ user_id: req.userInfo.id })
        .first()

      const subscription = await stripe.subscriptions.retrieve(
        subInfo.subscription
      )

      //update subscription plan
      const newSub = await stripe.subscriptions.update(subInfo.subscription, {
        cancel_at_period_end: false,
        items: [
          {
            id: subscription.items.data[0].id,
            plan: newPlan,
          },
        ],
      })

      //create invoice to pay/credit difference
      await stripe.invoices.create({
        customer: newSub.customer,
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

/**
 * @api {delete} /api/payments/cancel Cancel existing subscription
 * @apiDeprecated let member downgrade to 'free' subscription instead, better handling of member amounts and invoice
 * @apiGroup payments
 * @apiHeader authorization access token
 * @apiDescription invoking this will set a users subscription to cancel at the end of the billing cycle
 * @apiSuccess {object} confirmation stripe confirmation object
 */
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

/**
 * @api {get} /api/payments/subInfo get users subscription information
 * @apiGroup payments
 * @apiHeader authorization access token
 * @apiDescription invoking this endpoint will return information about a users current subscription
 * @apiSuccess {object} sub subscription information
 */
router.get('/subInfo', validateToken, getInfoFromToken, async (req, res) => {
  try {
    let sub = await db('subscriptions')
      .where({ user_id: req.userInfo.id })
      .first()
    if (sub) {
      res.status(200).json(sub)
    } else {
      res.status(404).json({ message: `subscription not found` })
    }
  } catch (err) {
    res.status(500).json(err)
  }
})

async function checkMemberSizeToDowngrade(req, res, next) {
  // user must not have more members than the desired new subscription plan allows
  req.desiredPlan = req.body.subscription.plan

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
    let members = await db('users').where({ club_id: req.userInfo.club_id })

    if (req.desiredPlan === plans.free && members.length <= memberLimit.free) {
      next()
    } else if (
      req.desiredPlan === plans.smallBiz &&
      members.length <= memberLimit.smallBiz
    ) {
      next()
    } else if (req.desiredPlan === plans.enterprise) {
      next()
    } else {
      res.status(400).json({
        message: `you have too many members to downgrade to the selected plan.`,
      })
    }
  } catch (err) {
    res.status(500).json({ error: err })
  }
}

module.exports = router
