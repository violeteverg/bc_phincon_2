const { faker } = require("@faker-js/faker");
// import { faker } from "@faker-js/faker";
console.log(faker.number.int({ min: 1, max: 20 }));
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const products = [...Array(20)].map(() => ({
      name: faker.commerce.product(),
      price: faker.number.float(),
      stock: faker.number.int({ min: 1, max: 100 }),
      categoryId: faker.number.int({ min: 1, max: 20 }),
    }));
    console.log(products, "<<<");

    await queryInterface.bulkInsert("Product", products);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Product", null, {});
  },
};
