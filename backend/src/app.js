const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
  return res.status(200).json({message: 'Estoque ON'});
});
app.use('/api/user', routes.userRouter);
app.use('/api/group', routes.groupRouter);

module.exports = app;