'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ProductSchema = new Schema({
  name: {type: String},
  price: {type: String},
  brand: {type: String},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

ProductSchema.statics = {

  get: function (query, callback) {
    this.findOne(query, callback);
  },

  getAll: function (query, callback) {
    this.find(query, callback);
  },

  updateById: function (query, updateData, callback) {
    this.update(query, {$set: updateData}, callback);
  },

  delete: function (removeData, callback) {
    this.remove(removeData, callback);
  },

  create: function (data, callback) {
    const product = new this(data);
    product.save(callback);
  }
};


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
