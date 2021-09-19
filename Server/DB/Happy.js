const mongoose = require('mongoose');

const happy = new mongoose.Schema({
  story: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Happy = mongoose.model('happy', happy);