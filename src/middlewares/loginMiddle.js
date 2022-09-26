module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const emailVerify = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  if (!emailVerify.test(email)) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};