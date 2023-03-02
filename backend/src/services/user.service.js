const { User, Group } = require('../models');

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'name'],
    include: { model: Group, as: 'group' },
  });
  return users;
};

module.exports = {
  getUsers,
};