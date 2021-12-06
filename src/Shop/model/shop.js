const bcrypt = require('bcryptjs');
const mongoose = require('../../database');

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    select: false,
  },
  rank: {
    type: String,
    select: false,
  },
  products: {
    type: Array,
    required: false,
    select: false,
  },
});

ShopSchema.pre('save', async (next) => {
  next();
});

const Shop = mongoose.model('Shop', ShopSchema);

module.exports = Shop;
