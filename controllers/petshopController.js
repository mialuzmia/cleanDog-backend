const Petshop = require('../models/petshops');
const mongoose = require('mongoose');

const getAllPetshops = async (req, res) => {
  try {
    const result = await Petshop.find({});
    if(!result){
      return res.status(404).json({ message: 'no petshops were found in the database' })
    }

    return res.status(200).json(result);
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
    const result = await Petshop.findById(id);
    if(!result){
      return res.status(404).json({ message: 'petshop not found' })
    }

    return res.status(200).json(result);
  } 
  catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
} 

const addPetshop = async (req, res) => {
  
  try {
    const petshop = new Petshop(req.body);
    const result = await petshop.save();
    console.log('\n',result, '\n');
    return res.status(200).json({ message: 'petshop added successfully', result });
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