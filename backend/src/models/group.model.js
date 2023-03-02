/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
  * @param {import('sequelize').DataTypes} DataTypes 
 */
const GroupModel = (sequelize, DataTypes) => {
  const Group = sequelize.define(
    'Group',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'groups',
      timestamps: false,
    }
  );

  Group.associate = (models) => {
    Group.hasMany(models.User,
      { foreignKey: 'groupId', as: 'group' });
  }

  // (async () => {
  //   await sequelize.sync();
  // })();

  return Group;
}

module.exports = GroupModel;