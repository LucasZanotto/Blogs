// const jwt = require('jsonwebtoken');
const newCategory = require('../services/blog.service');

// const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
    const allUsers = await newCategory.findAllBlogs();
    res.status(200).json(allUsers);
  };
