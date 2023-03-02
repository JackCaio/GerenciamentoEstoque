/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
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

  User.associate = (models) => {
    User.belongsTo(models.Group,
      { foreignKey: 'groupId', as: 'group' });
  }

  // (async () => {
  //   await sequelize.sync();
  //   // await sequelize.sync({force: true}); // force true recria as tabelas sempre que o server reinicia, não usar em produção
  // })();

  return User;
};

module.exports = UserModel;