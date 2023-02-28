'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Groups', [
      {
        name: 'Admin',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        deletedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Gerente',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        deletedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Empregado',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        deletedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);

    await queryInterface.bulkInsert('Users', [
      {
        name: 'Roberto Russo',
        password: 'banana123',
        group_id: 1,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        deletedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Ana Paula',
        password: 'potato123',
        group_id: 2,
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        deletedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
