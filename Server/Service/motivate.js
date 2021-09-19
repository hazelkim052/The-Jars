const express = require('express');
const mongoose = require('mongoose');
const Happy = require('../DB/motivate');
const route = express.Router();

route.post('/', async (req, res) => {
  const { story, date } = req.body;
  let user = {};
  user.story = story;
  user.date = date;
  let userStory = new Happy(user);
  await userStory.save();
  res.json(userStory);
});

module.exports = route;