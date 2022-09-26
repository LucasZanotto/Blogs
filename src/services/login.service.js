const { User } = require('../models');

const login = async (email, password) => {
  console.log('email aqui', email);
  const newUser = await User.findOne({ where: { email, password } });
  return newUser;
};

const createUser = async (email, password) => {
  const newUser = await User.create({ email, password });

  return newUser;
};

module.exports = {
  createUser,
  login,
};
