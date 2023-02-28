const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync
    // await sequelize.sync({force: true}); // force true recria as tabelas sempre que o server reinicia, não usar em produção
  })();

  return User;
};

module.exports = UserModel;