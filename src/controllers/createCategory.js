const newCategory = require('../services/category.service');

module.exports = async (req, res) => {
  const { name } = req.body;
  if (name) {
    const findCat = await newCategory.createCategory(name);
    return res.status(201).json(findCat);
  }
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  };