// const jwt = require('jsonwebtoken');
const newUser = require('../services/login.service');

// const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const allUsers = await newUser.findById(id);
  if (!allUsers) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  if (allUsers) {
    res.status(200).json(allUsers);
  }
  };
