const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  id: {
    type: String,
    maxlength: 20,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  role: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
  },
  tokenExp: {
    type: Number,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
