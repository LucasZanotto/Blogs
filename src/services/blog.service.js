const { Category, BlogPost, User } = require('../models');

// const body = [Category, BlogPost, User, PostCategory];

const findAllBlogs = async () => {
  const allBlogs = await BlogPost.findAll({
    include: [{
      model: User,
as: 'user',
      attributes: { exclude: ['password'] },
    },
  {
    model: Category,
as: 'categories',
through: { attributes: [] },
  },
],
  });
  return allBlogs;
};

const findIdBlogs = async (id) => {
  const allBlogs = await BlogPost.findOne({
    where: { id },
    include: [{
      model: User,
as: 'user',
      attributes: { exclude: ['password'] },
    },
  {
    model: Category,
as: 'categories',
through: { attributes: [] },
  },
],
  });
  return allBlogs;
};

module.exports = {
  findAllBlogs,
  findIdBlogs,
};
