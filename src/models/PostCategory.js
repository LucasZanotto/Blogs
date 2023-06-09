// src/models/blogPosts.model.js

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

 module.exports = (sequelize, DataTypes) => {
  const PostsCategorie = sequelize.define('PostCategory', 
  {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostsCategorie.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostsCategorie,
      foreignKey: 'category_id',
      otherKey: 'post_id'
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostsCategorie,
      foreignKey: 'post_id',
      otherKey: 'category_id'
    });
  };

  return PostsCategorie;
};