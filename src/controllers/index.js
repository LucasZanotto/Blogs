const login = require('./login.controller');
const user = require('./user.controller');
const listUsers = require('./listUsers.controller');
const findUser = require('./findByUser');
const createCategory = require('./createCategory');
const findAllCategory = require('./findAllCategory');
const findBlogPosts = require('./findBlogPosts');
const findAllBlogs = require('./findAllBlogs');

module.exports = {
  login,
  user,
  listUsers,
  findUser,
  createCategory,
  findAllCategory,
  findBlogPosts,
  findAllBlogs,
};
