const express = require('express');
const path = require('path');

//middleware for api requests
const apiController = require(path.resolve(__dirname, '../controllers/apiController'));

const apiRouter = express.Router();

apiRouter.get('/products', apiController.getProducts, (req, res) => {
  return res.status(200).set('Content-Type', 'json/application').json(res.locals.products);
});

apiRouter.post('/order', apiController.postOrders, (req, res) => {
  return res.status(200).set('Content-Type', 'json/application').json(res.locals.orderResponse);
});

module.exports = apiRouter;