// src/models/users.model.js

/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

 module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    // A declaração da Foreign Key é opcional no model
  },
  {
    timestamps: false,
    tableName: 'categories',
    underscored: true,
  });

  // Category.associate = (models) => {
  //   Category.hasMany(models.PostCategory,
  //     { foreignKey: 'categoryId', as: 'categories' });
  // };

  return Category;
};