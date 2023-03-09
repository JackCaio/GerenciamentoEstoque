require('dotenv/config');
const jwt = require('jsonwebtoken');
const { userService } = require('../../services');

const secret = process.env.JWT_SECRET;
const jwtConfig = {
  expiresIn: '4h',
  algorithm: 'HS256',
};

const createToken = (req, res) => {
  const { userData } = req;
  const token = jwt.sign({ userData }, secret, jwtConfig);

  res.status(200).json({ token });
};

const validateToken = async (req, _res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    const error = new Error('Token not found');
    error.status = 401;
    throw error;
  }

  try {
    const { userData } = jwt.verify(token, secret);

    const user = await userService.findUserId(userData.id);

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createToken,
  validateToken,
};