"use strict";
// import bcrypt from "bcrypt";
const bcrypt = require("bcrypt");
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
    await queryInterface.bulkInsert("user", [
      {
        us_fullname: "Muhammad fauzan",
        us_username: "fauzan",
        us_password: bcrypt.hashSync("1234567890", 10),
        us_email: "fauzanah@gmail.com",
        us_phone_number: "085725363777",
        us_active: true,
        us_created_on: new Date(),
        us_created_by: 1,
        us_update_on: new Date(),
        us_update_by: 1,
      },
      {
        us_fullname: "udin mail",
        us_username: "udin",
        us_password: bcrypt.hashSync("1234567890", 10),
        us_email: "udin1234@gmail.com",
        us_phone_number: "081234567890",
        us_active: true,
        us_created_on: new Date(),
        us_created_by: 1,
        us_update_on: new Date(),
        us_update_by: 1,
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
    await queryInterface.bulkDelete("user", null, {});
  },
};
