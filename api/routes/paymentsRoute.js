const express = require('express')
const router = express.Router()
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')

router.post('/', (req, res) => {
  let plan = req.body.subscription.plan

  stripe.customers
    .create({
      email: req.body.email,
      source: req.body.id,
    })
    .then(customer =>
      stripe.subscriptions.create({
        customer: customer.id,
        items: [{ plan }],
      })
    )
    .then(charge => res.send(charge))
    .catch(err => {
      console.log('Error:', err)
      res.status(500).json({ error: 'Purchase Failed' })
    })
})

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
