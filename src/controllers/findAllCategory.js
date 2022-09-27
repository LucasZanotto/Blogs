// const jwt = require('jsonwebtoken');
const newCategory = require('../services/category.service');

// const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
    const allUsers = await newCategory.findAllCategory();
    res.status(200).json(allUsers);
  };
