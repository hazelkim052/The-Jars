const mongoose = require('mongoose');

const motivate = new mongoose.Schema({
  story: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Motivate = mongoose.model('motivate', motivate);