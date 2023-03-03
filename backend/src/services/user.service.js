const { User, Group } = require('../models');

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'name'],
    include: { model: Group, as: 'group', attributes: ['name'] },
  });
  return users;
};

module.exports = {
  getUsers,
};