const { User } = require('../models');

const login = async (email, password) => {
  console.log('email aqui', email);
  const newUser = await User.findOne({ where: { email, password } });
  return newUser;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

module.exports = {
  createUser,
  login,
};
