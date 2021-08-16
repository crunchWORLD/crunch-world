const path = require('path')
const db = require(path.resolve(__dirname, '../../database/pool.js'));

const apiController = {
  async getProducts(req, res, next) {
    const query = `SELECT * FROM products`;

    //CALLBACK METHOD
    await db.query(query, null, (err, queryRes) => {
      if (err) return next(err);
      
      res.locals.products = queryRes.rows; //should return array of objects with details on ALL products
      return next();
    });
  },
  /*
  async postOrders(req, res, next) {
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
    
    const detailsQuery = `INSERT INTO orders_detail (order_id, product_id, quantity)
    VALUES ($1, $2, $3)
    RETURNING *`

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
  },
  */
  async postOrders(req, res, next) {
    const ordersQuery = `INSERT INTO orders (date, subtotal, taxtotal, shiptotal, cust_id)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *`
    
    const ordersValues = [new Date().toISOString(), req.body.subtotal, req.body.taxtotal, req.body.shiptotal, req.body.cust_id];

    await db.query(ordersQuery, ordersValues, async (err, queryRes) => {
      if (err) {
        res.locals.orderResponse = {orderStatus: 'failure', message: 'error occured when sending query'};
        return next();
      } else if (queryRes.rows.length === 0) {
        res.locals.orderResponse = {orderStatus: 'failure', message: 'queryRes.rows empty'};
        return next();
      }

      res.locals.orderResponse = {orderStatus: 'success'};
      res.locals.order_id = queryRes.rows[0].id;

      for (let i = 0; i < req.body.products.length; i++) {
        let currProduct = req.body.products[i];
        console.log('currProduct is: ', currProduct);
  
        let detailsQuery = `INSERT INTO orders_detail (order_id, product_id, quantity)
        VALUES ($1, $2, $3)`

        let detailsValues = [res.locals.order_id, currProduct.product_id, currProduct.quantity];
         
        await db.query(detailsQuery, detailsValues, (err, queryRes) => {
          if (err) {
            console.log('Failure (err) durring iteration: ', i);
            console.log(err);
            return next()
          }
        });
      }
      return next();
    });
  },
};
  /*
  What will the order request look like?

  Whether it's an order of 1 product or an order of 10 products, all orders MUST be submitted within an array.
  The array will be included within the body of the request (req.body.orderArr or something).

  Ex:
  {
    "subtotal" : 100,
    "taxtotal" : 0,
    "shiptotal" : 0,
    "cust_id" : 1,
    "products" : [
      {"product_id": 1, "quantity": 1},
      {"product_id": 2, "quantity": 1},
      {"product_id": 3, "quantity": 1}
    ]
  }

  Notice that each individual sub-order is an object!
  */

module.exports = apiController;