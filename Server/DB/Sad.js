const mongoose = require('mongoose');

const sad = new mongoose.Schema({
  story: {
    type: String
  },
  date: {
    type: String
  }
});

module.exports = Sad = mongoose.model('sad', sad);