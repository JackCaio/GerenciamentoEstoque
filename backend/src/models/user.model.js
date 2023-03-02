/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
 */
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      groupId: DataTypes.INTEGER,
    },
    {
      tableName: 'users',
      underscored: true,
    }
  );

  // (async () => {
  //   await sequelize.sync();
  //   // await sequelize.sync({force: true}); // force true recria as tabelas sempre que o server reinicia, não usar em produção
  // })();

  return User;
};

module.exports = UserModel;