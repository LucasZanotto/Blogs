const { Category } = require('../models');

const createCategory = async (name) => {
  const newUser = await Category.create({ name });

  return newUser;
};

const findAllCategory = async () => {
  const allUsers = await Category.findAll();
  return allUsers;
};

module.exports = {
  createCategory,
  findAllCategory,
};
