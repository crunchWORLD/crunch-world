const express = require('express');
const path = require('path');

//middleware for login requests
const loginController = require(path.resolve(__dirname, '../controllers/loginController'));

const loginRouter = express.Router();

loginRouter.get('/', loginController.attemptLogin, (req, res) => {
  return res.status(200).set('Content-Type', 'json/application').json(res.locals.loginAttempt);
});

module.exports = loginRouter;