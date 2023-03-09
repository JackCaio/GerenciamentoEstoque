const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const bcrypt = require('bcrypt');

const app = express();
app.use(cors({ origin: '*' }));
app.use(express.json());

app.get('/api', (_req, res) => {
  return res.status(200).json({message: 'Estoque ON'});
});
app.use('/api/user', routes.userRouter);
app.use('/api/group', routes.groupRouter);

// Adicionar rota que gera senha com bcrypt para atualizar banco

module.exports = app;