const express = require('express');
const router = express.Router();
const petshopController = require('../controllers/petshopController');

router.get('/', petshopController.getAllPetshops);
router.post('/add', petshopController.addPetshop);
router.get('/:id', petshopController.getPetshopById);

module.exports = router;