const newBlogs = require('../services/blog.service');

module.exports = async (req, res) => {
  const { id } = req.params;
  const allUsers = await newBlogs.findIdBlogs(id);
  if (!allUsers) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  if (allUsers) {
    res.status(200).json(allUsers);
  }
  };
