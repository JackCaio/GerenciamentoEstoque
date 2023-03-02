/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {*} DataTypes 
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

  // (async () => {
  //   await sequelize.sync();
  // })();

  return Group;
}

module.exports = GroupModel;