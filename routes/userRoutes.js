// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST route to add a new user
router.post('/users', userController.addUser);

// GET route to get all users
router.get('/users', userController.getUsers);

module.exports = router;
