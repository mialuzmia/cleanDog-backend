const Petshop = require('../models/petshops');


const getAllPetshops = async (req, res) => {
  try {
    const result = await Petshop.find({});
    res.json(result);
  } catch(err) {
    res.json({ message: err.message });

  };
};

const addPetshop = async (req, res) => {
  
  try {
    const petshop = new Petshop(req.body);
    const result = await petshop.save();
    console.log('\n',result, '\n');
    res.end();
  } 
  catch(err) {
    console.log(err);
    res.json({ message: err.message });
  }

};

module.exports = {
  addPetshop,
  getAllPetshops
}