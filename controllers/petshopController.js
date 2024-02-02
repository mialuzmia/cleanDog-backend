const Petshop = require('../models/petshops');
const mongoose = require('mongoose');

const getAllPetshops = async (req, res) => {
  try {
    const petshops = await Petshop.find({});
    if(!petshops){
      return res.status(404).json({ message: 'no petshops were found in the database' })
    }

    return res.status(200).json(petshops);
  } 
  catch(err) {
    return res.status(500).json({ message: err.message });

  };
};

const getPetshopById = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({message: 'invalid ID'});
  };

  try {
    const petshop = await Petshop.findById(id);
    if(!petshop){
      return res.status(404).json({ message: 'petshop not found' })
    }

    return res.status(200).json(petshop);
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
} 

const addPetshop = async (req, res) => {
  
  try {
    const petshop = new Petshop(req.body);
    const savedPetshop = await petshop.save();
    console.log('\n',savedPetshop, '\n');
    return res.status(200).json({ message: 'petshop added successfully', savedPetshop });
  } 
  catch(err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }

};

module.exports = {
  addPetshop,
  getAllPetshops, 
  getPetshopById
}