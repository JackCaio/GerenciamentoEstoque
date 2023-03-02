const { Group } = require('../models');

const getAll = async () => {
  const groups = Group.findAll();
  return groups;
}

module.exports = {
  getAll,
};