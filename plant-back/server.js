//Requirements
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//DOTENV
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
}

//Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors(corsOptions));


//Routes
app.get('/', (req, res) => res.send('home'));
app.use('/plants', routes.plants);
app.use('/users', routes.user);


//Listener
app.listen(PORT, () => console.log(`You're growing in port ${PORT}`));