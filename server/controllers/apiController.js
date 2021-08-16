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
  },

  async postOrder(req, res, next) {
    const query = `INSERT INTO orders (date, subtotal, taxtotal, shiptotal, cust_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`
    // ORDERS: date, subtotal, taxtotal, shiptotal, cust_id

    const values = [new Date().toISOString(), req.body.subtotal, req.body.taxtotal, req.body.shiptotal, req.body.cust_id];

    await db.query(query, values, (err, queryRes) => {
      if (err) {
        res.locals.orderResponse = {orderStatus: 'failure', message1 : 'Invalid order to POST!'}
        return next();
      }

      if (queryRes.rows.length === 0) {
        res.locals.orderResponse = {orderStatus: 'failure', message1 : 'order failed to POST to database!'};
        return next();
      }

      res.locals.orderResponse = { orderStatus: 'success', orderPlaced: queryRes.rows[0] };
      res.locals.order_id = queryRes.rows[0].id; //saves order_id for use in next await
      return next(); //remove when implementing POST to orders_detail
    });

    // POSTING TO orders_detail =================================
    /*START+++++++++++
    const detailsQuery = `INSERT INTO orders_detail (order_id, product_id, quantity)
    VALUES ($1, $2, $3)
    RETURNING *`;

    const detailsValues = [res.locals.order_id, req.body.product_id, req.body.quantity];

    await db.query(detailsQuery, detailsValues, (err, queryRes) => {
      if (err) {
        res.locals.orderResponse = {...res.locals.orderResponse, detailsStatus: 'failure', message2 : 'Invalid details to POST!'}
        return next();
      }

      if (queryRes.rows.length === 0) {
        res.locals.orderResponse = {...res.locals.orderResponse, detailsStatus: 'failure', message2 : 'details failed to POST to database!'};
        return next();
      }

      res.locals.orderResponse.detailsStatus = 'success';
      return next();
    });
    END+++++++++++*/ 
  },

  /*
  async postOrders_detail() {
    const query = `INSERT INTO orders_detail (order_id, product_id, quantity)
    VALUES ($1, $2, $3)
    RETURNING *`

    const values = [res.locals.order_id, req.body.product_id, req.body.quantity];

    await db.query(query, values, (err, queryRes) => {
      if (err) {
        res.locals.orderResponse.orders_detailResponse = 'failure';
        return next();
      }

      if (queryRes.rows.length === 0) {
        res.locals.orderResponse.orders_detailResponse = 'failure';
        return next();
      }
      
      console.log('ORDERS_DETAIL: ', queryRes.rows[0]);

      return next();
    });
  }
  */
};

module.exports = apiController;