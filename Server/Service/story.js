const express = require('express');
const mongoose = require('mongoose');
const Happy = require('../DB/Happy');
const route = express.Router();


route.get('/', async(req,res) => {
  Happy.find({})
  .exec(function(err, stories) {
      if (err) {
          console.log("error in retrieving the videos");
      } else {
          res.json(stories);
      }
  });
})

module.exports = route;