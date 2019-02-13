const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

module.exports = server => {
   server.use(helmet());
   server.use(express.json());
   server.use(morgan('short'));
   server.use(cors());
};
