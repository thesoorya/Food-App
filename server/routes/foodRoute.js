const express = require('express');
const { getFoods, getFood, createFood, updateFood, deleteFood, getFoodByName } = require('../controller/foodController');
const router = express.Router();

// get
router.get('/:id', getFood);
router.get('/name/:name', getFoodByName);
router.get('/', getFoods);

// post
router.post('/', createFood);

// update
router.put('/:id', updateFood);

// delete
router.delete('/:id', deleteFood);

module.exports = router;
