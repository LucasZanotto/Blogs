// const jwt = require('jsonwebtoken');
const newUser = require('../services/login.service');

// const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
    const allUsers = await newUser.viewAll();
    res.status(200).json(allUsers);
  };
