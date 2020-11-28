//Requirements
const express = require('express');

//DOTENV
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 4000;

//Controllers

//Middleware

//Express Session, layouts?


//Listener
app.listen(4000, () => {
  console.log(`You're growing in port ${PORT}`)});