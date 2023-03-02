const express = require('express');
const { groupController } = require('../controllers');

const router = express.Router();

router.get('/', groupController.getAll);

module.exports = router;