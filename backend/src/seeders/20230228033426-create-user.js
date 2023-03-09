'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('groups', [
      {
        name: 'Admin',
      },
      {
        name: 'Gerente',
      },
      {
        name: 'Empregado',
      }
    ]);

    await queryInterface.bulkInsert('users', [
      {
        name: 'Roberto Russo',
        password: '$2b$10$NO8KdaBzINi3CdXqe1uUj.XnK/N1xjAuN7XhXJHw2mLPFfDjRvAfi', // 123456
        group_id: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        name: 'Ana Paula',
        password: '$2b$10$GQl6q9ft.xwWo2dwT6bcJu3EYxR3uiwmdiPAhiLIyiZycPp81h5GG', // 123456
        group_id: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
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
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('groups', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
