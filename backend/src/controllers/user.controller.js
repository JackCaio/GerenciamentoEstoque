const { userService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const users = await userService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).end()
  }
}

module.exports = {
  getAll,
};