const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));

const apiController = {
  async getProducts(req, res, next) {
    const query = `SELECT * FROM products`;

    //CALLBACK METHOD
    await db.query(query, null, (err, queryRes) => {
      if (err) return next(err);

      console.log(queryRes.rows);
      res.locals.products = queryRes.rows; //should return array of objects with details on ALL products
      return next();
    });

    // res.locals.products = {retrieved : 'products'}; // POSTMAN TEST
  },

  async postOrder(req, res, next) {
    /*
    const query = `INSERT INTO orders (...)
    VALUES ($1, $2, $3...) RETURNING *`

    const values = [req.body.date, ...];

    await db.query(query, values, (err, queryRes) => {
      if (err) return next(err);

      if (queryRes.rows.length === 0) {
        res.locals.orderResponse = {error : 'query failed to POST to database!'};
        return next();
      }

      res.locals.orderResponse = queryRes.rows[0]
      return next();
    });

    */

    res.locals.orderResponse = {order : 'submitted!'};
    return next();
  }
};

module.exports = apiController;