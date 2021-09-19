const express = require('express');
const connectDB = require('./DB/connection')
const app = express();

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))

connectDB();
app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Service/user'));
app.use('/api/userStory', require('./Service/happy'));
app.use('/api/stories', require('./Service/story'));
const Port = process.env.Port || 3000;

app.listen(Port, ()=>console.log("server started"));
