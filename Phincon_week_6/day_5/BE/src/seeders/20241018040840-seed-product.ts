const { faker } = require("@faker-js/faker");
// import { faker } from "@faker-js/faker";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [...Array(20)].map(() => ({
      name: faker.commerce.product(),
      price: faker.commerce.price(),
      stock: faker.number.int({ min: 1, max: 100 }),
      categoryId: faker.number.int({ min: 1, max: 20 }),
    }));

    const categories = [...Array(20)].map(() => ({
      name: faker.commerce.productName(),
    }));

    await queryInterface.bulkInsert("Category", categories);

    await queryInterface.bulkInsert("Product", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Product", null, {});
  },
};
