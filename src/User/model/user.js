const bcrypt = require('bcryptjs');
const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  phoneNumber: {
    type: String,
    required: true,
    select: false,
  },
  clientType: {
    type: Boolean,
    required: true,
    select: false,
  },
  products: {
    type: Array,
    required: false,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 6);
  this.password = hash;

  next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
