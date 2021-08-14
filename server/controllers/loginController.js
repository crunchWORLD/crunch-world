// const db = require('../models/appModels.js');

const loginController = {
  /*Middleware goes here*/
  async attemptLogin(req, res, next) {
    /*
    const query = `SELECT * FROM users
    WHERE username = $1 AND password = $2`;

    const values = [req.body.username, req.body.password];
    await db.query(query, values, (err, queryRes) => {
      if (err) {
        // we don't want a login failure to break our app--just reponse with a failed login attempt
        res.locals.loginAttempt = {login: 'failure'};
        return next();
      }

      if (queryResp.rows.length === 0) {
        res.locals.loginAttempt = {login: 'failure'};
        return next();
      }

      res.locals.loginAttempt =  {login: 'success'};
      return next();
    });
    */

    console.log('inside loginController.attemptLogin');
    res.locals.attempted = {attempted : 'login'};
    return next();
  }
};

module.exports = loginController;