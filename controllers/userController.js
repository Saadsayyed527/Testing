// controllers/userController.js

const User = require('../models/User');

// Add a new user
exports.addUser = async (req, res) => {
  const { name, age, profession, number_of_vehicles } = req.body;

  try {
    const newUser = new User({ name, age, profession, number_of_vehicles });
    await newUser.save();
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error adding user', error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error: error.message });
  }
};
