const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.get('/api', (_req, res) => {
  return res.status(200).json({message: 'Estoque ON'});
});
app.use('/api/user', routes.userRouter);

module.exports = app;