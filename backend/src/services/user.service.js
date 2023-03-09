const { User, Group } = require('../models');
const bcrypt = require('bcrypt');

const login = async (name, password) => {
  const user = await User.findOne({
    where: { name },
    attributes: { exclude: [ 'createdAt', 'updatedAt' ] },
  });

  if(!user || !bcrypt.compareSync(password, user.password)) {
    const error = new Error('Invalid Data');
    error.status = 400;
    throw error;
  }

  const { password: _, ...userData } = user.dataValues
  return userData;
}

const getUsers = async () => {
  const users = await User.findAll({
    attributes: ['id', 'name'],
    include: { model: Group, as: 'group', attributes: ['name'] },
  });
  return users;
};

const findUserId = async (id) => {
  const user = await User.findByPk(id);
  return user;
}

module.exports = {
  getUsers,
  login,
  findUserId,
};