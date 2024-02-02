const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Petshop = require('./models/petshops');

const app = express(); //initializes express app

const dbURL = 'mongodb+srv://mialuz:IEZoflXlk1pFFd4Q@cluster0.37zpk8d.mongodb.net/cleanDog?retryWrites=true&w=majority'

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

app.use(morgan('dev'));

