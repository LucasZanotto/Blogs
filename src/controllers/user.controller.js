const jwt = require('jsonwebtoken');
const newUser = require('../services/login.service');

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const payload = {
    email: req.body.email,
  };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '4d',
  });
  const User = await newUser.login(email, password);
  if (User) {
    res.status(409).json({ message: 'User already registered' });
  }
  if (!User) {
    await newUser.createUser(displayName, email, password, image);
    res.status(201).json({ token });
  }
};