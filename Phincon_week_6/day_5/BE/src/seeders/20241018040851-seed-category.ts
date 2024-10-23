// const { faker } = require("@faker-js/faker");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const categories = [...Array(20)].map(() => ({
      name: faker.commerce.productName(),
    }));

    await queryInterface.bulkInsert("Category", categories);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Category", null, {});
  },
};
