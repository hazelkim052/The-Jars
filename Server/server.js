const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Service/user'));
app.use('/api/userStory', require('./Service/happy'));
const Port = process.env.Port || 3000;

app.listen(Port, ()=>console.log("server started"));
