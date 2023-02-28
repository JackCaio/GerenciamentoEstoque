const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.getAll);

module.exports = router;