const { User } = require('../models');

const login = async (email, password) => {
  const newUser = await User.findOne({ where: { email, password } });
  return newUser;
};

const createUser = async (displayName, email, password, image) => {
  const newUser = await User.create({ displayName, email, password, image });

  return newUser;
};

const viewAll = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return allUsers;
};

const findById = async (id) => {
  const allUsers = await User.findByPk(id, { attributes: { exclude: ['password'] } });
  return allUsers;
};

module.exports = {
  createUser,
  login,
  viewAll,
  findById,
};
