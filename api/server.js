const express = require('express');
const mwConfig = require('../config/mwConfig');
const server = express();

mwConfig(server);

server.get('/', (req, res) => {
   res.status(200).send('Sanity check passed');
});

module.exports = server;
