const { groupService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const result = await groupService.getAll();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
}

module.exports = {
  getAll,
}