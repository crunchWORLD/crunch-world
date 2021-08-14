// const db = require('../models/appModels.js');

const apiController = {
  async getProducts(req, res, next) {
    /*
    const query = `SELECT * FROM products`;

    //CALLBACK METHOD
    await db.query(query, null, (err, queryRes) => {
      if (err) return next(err);

      res.locals.products = queryRes.rows; //should return array of objects with details on ALL products
      return next();
    });
    */
   console.log('inside apiController.getProducts');
   res.locals.products = {retrieved : 'products'};
   return next();
  }
};


module.exports = apiController;