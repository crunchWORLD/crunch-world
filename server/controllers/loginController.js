const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));

const loginController = {
  async attemptLogin(req, res, next) {
    const query = `SELECT * FROM customers
    WHERE email = $1 AND password = $2;`;

    const values = [req.query.email, req.query.password];

    await db.query(query, values, (err, queryRes) => {
      if (err) {
        // we don't want a login failure to break our app--just reponse with a failed login attempt
        res.locals.loginAttempt = {login: 'Query Failure!'};
        return next();
      }

      if (queryRes.rows.length === 0) {
        res.locals.loginAttempt = {login: 'Login Credentials Invalid!'};
        return next();
      }

      console.log(queryRes.rows[0]);

      res.locals.loginAttempt =  {login: 'Login Success!'};
      return next();
    });
  }
};

module.exports = loginController;