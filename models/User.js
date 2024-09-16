// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  profession: {
    type: String,
    required: true,
  },
  number_of_vehicles: {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model('User', userSchema);
