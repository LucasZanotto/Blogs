// src/models/blogPosts.model.js

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

 module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE },
    updated: { type: DataTypes.DATE },
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'blog_posts',
    underscored: true,
    createdAt: "published",
    updatedAt: "updated",
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
      { foreignKey: 'userId', as: 'user' });
  };

  return BlogPost;
};