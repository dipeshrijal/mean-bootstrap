const Product = require('../controllers/product');

module.exports = function (router) {
  router.get('/api/products', Product.get);
  router.post('/api/products', Product.create);
  router.put('/api/products/:id', Product.update);
  router.get('/api/products/:id', Product.findOne);
  router.delete('api/products/:id', Product.delete);
};
