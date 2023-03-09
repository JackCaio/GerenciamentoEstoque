const express = require('express');
const { userController } = require('../controllers');
const auth = require('../middlewares/auth');

const router = express.Router();

router.get('/', userController.getAll);
router.post('/', userController.userLogin, auth.createToken);

module.exports = router;