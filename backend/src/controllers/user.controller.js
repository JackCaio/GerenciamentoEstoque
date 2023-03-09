const { userService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).end()
  }
}

const userLogin = async (req, res, next) => {
  try {
    const {user, password} = req.body
    const login = await userService.login(user, password);

    req.userData = login;
    next();
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({ error: error.message });
  }
}

module.exports = {
  getAll,
  userLogin,
};