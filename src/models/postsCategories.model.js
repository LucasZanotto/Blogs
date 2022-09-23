// src/models/blogPosts.model.js

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

 module.exports = (sequelize, DataTypes) => {
  const postsCategorie = sequelize.define('postsCategorie', 
  {},
  {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  postsCategorie.associate = (models) => {
    models.Categorie.belongsToMany(models.blogPosts)
  };

  return postsCategorie;
};