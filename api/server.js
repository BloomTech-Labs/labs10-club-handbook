const express = require('express')
const mwConfig = require('../config/mwConfig')
const server = express()
server.use(require('body-parser').text())
const usersRoute = require('./routes/usersRoute')
const clubsRoute = require('./routes/clubsRoute')
const paymentsRoute = require('./routes/paymentsRoute')
const stripe = require('stripe')('sk_test_QBcc8So0WjMMIznAloTV3kdv')
const imagesRoute = require('./routes/imagesRoute')
const settingsRoute = require('./routes/settingsRoute')

mwConfig(server)

server.get('/', (req, res) => {
  res.status(200).send('Sanity check passed')
})

server.use('/api/users', usersRoute)
server.use('/api/clubs', clubsRoute)
server.use('/api/payments', paymentsRoute)
server.use('/api/images', imagesRoute)
server.use('/api/settings', settingsRoute)

module.exports = server
