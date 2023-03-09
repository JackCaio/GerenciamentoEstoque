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
        unique: true
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

  return User;
};

module.exports = UserModel;