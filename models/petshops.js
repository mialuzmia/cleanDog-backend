const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetshopSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
  },
  weekdayPrices: {
    small: {
      type: Number,
      required: true
    },
    big: {
      type: Number,
      required: true
    },
  },
  weekendPrices: {
    small: {
      type: Number,
      required: true
    },
    big: {
      type: Number,
      required: true
    },
  }
},{
  timestamps: true,
});

const Petshop = mongoose.model('Petshop', PetshopSchema);

module.exports = Petshop