const login = require('./login.controller');
const user = require('./user.controller');
const listUsers = require('./listUsers.controller');
const findUser = require('./findByUser');

module.exports = {
  login,
  user,
  listUsers,
  findUser,
};
