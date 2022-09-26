const jwt = require('jsonwebtoken');
const newUser = require('../services/login.service');

const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const payload = {
    email: req.body.email,
  };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '4d',
  });
  const User = await newUser.login(email, password);
console.log(User);
  if (User) {
    res.status(200).json({ token });
  }
  if (!User) {
    res.status(400).json({ message: 'Invalid fields' });
  }
};