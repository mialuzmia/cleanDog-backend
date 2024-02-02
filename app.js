const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

const Petshop = require('./models/petshops');
const petshopRoutes = require('./routes/petshopRoutes');

const app = express(); //initializes express app

const dbURL = process.env.DATABASE_URL;

// connects to database
const connectToDb = async () => {
  const port = 3000;
  const hostname = 'localhost';
  try {
    const result = await mongoose.connect(dbURL);
    console.log('\nconnected to db\n');
    app.listen(port, hostname, () => console.log(`server running at http://${hostname}:${port}\n`));
  } catch (err) {
    console.log(err);
  };
};

connectToDb();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(petshopRoutes);

// app.get('/', (req, res) => {
//   res.end('hello')
// })
