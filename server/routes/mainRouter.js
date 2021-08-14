const express = require('express');
const path = require('path');

//middleware for the main page
const mainController = require(path.resolve(__dirname, '../controllers/mainController'));

const mainRouter = express.Router();

mainRouter.get('/', /*middleware from mainController goes here*/ (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../../index.html'));
});

module.exports = mainRouter;