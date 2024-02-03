const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const petshopRoutes = require('./routes/petshopRoutes');

const app = express(); //initializes express app

const dbURL = process.env.DATABASE_URL;
const port = process.env.PORT || 3000;

// connects to database
const connectToDb = async () => {
  try {
    const result = await mongoose.connect(dbURL);
    console.log('\nconnected to db\n');
    app.listen(port, () => console.log(`server running on port ${port}\n`));
  } catch (err) {
    console.log(err);
  };
};

connectToDb();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(petshopRoutes);
