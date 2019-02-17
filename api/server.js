const express = require('express')
const mwConfig = require('../config/mwConfig')
const server = express()
server.use(require('body-parser').text())
const usersRoute = require('./routes/usersRoute')
const clubsRoute = require('./routes/clubsRoute')
const paymentsRoute = require('./routes/paymentsRoute')
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')
const imagesRoute = require('./routes/imagesRoute')

mwConfig(server)

server.get('/', (req, res) => {
  res.status(200).send('Sanity check passed')
})

server.post('/payments', (req, res) => {
  let amount = 500

  stripe.customers
    .create({
      email: req.body.email,
      card: req.body.id,
      source: 'tok_visa',
    })
    .then(customer =>
      stripe.charges.create({
        amount,
        description: 'Sample Charge',
        currency: 'usd',
        customer: customer.id,
      })
    )
    .then(charge => res.send(charge))
    .catch(err => {
      console.log('Error:', err)
      res.status(500).send({ error: 'Purchase Failed' })
    })
})

server.use('/api/users', usersRoute)
server.use('/api/clubs', clubsRoute)
server.use('/payments', paymentsRoute)
server.use('/api/images', imagesRoute)

module.exports = server
