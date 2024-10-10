"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("users_roles", [
      {
        ur_us_id: 1,
        ur_rl_id: 1,
        ur_active: true,
        ur_created_on: new Date(),
        ur_created_by: 1,
        ur_updated_on: new Date(),
        ur_updated_by: 1,
      },
      {
        ur_us_id: 2,
        ur_rl_id: 2,
        ur_active: true,
        ur_created_on: new Date(),
        ur_created_by: 1,
        ur_updated_on: new Date(),
        ur_updated_by: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("users_roles", null, {});
  },
};
