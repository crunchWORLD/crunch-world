const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));

const loginController = {
  async attemptLogin(req, res, next) {
    const query = `SELECT id FROM customers
    WHERE email = $1 AND password = $2`;

    const values = [req.query.email, req.query.password];

    await db.query(query, values, (err, queryRes) => {
      if (err) {
        // we don't want a login failure to break our app--respond explaining that the query failed
        res.locals.loginAttempt = {login: 'failure', message: 'Query Failure!'};
        return next();
      }

      if (queryRes.rows.length === 0) {
        res.locals.loginAttempt = {login: 'failure', message: 'Login Credentials Invalid!'};
        return next();
      }

      console.log(queryRes.rows[0]);

      res.locals.loginAttempt =  {login: 'success', cust_id : queryRes.rows[0].id};
      return next();
    });
  }
};

module.exports = loginController;