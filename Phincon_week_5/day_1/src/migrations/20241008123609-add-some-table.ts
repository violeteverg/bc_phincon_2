"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */ await queryInterface.createTable("user", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      us_fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      us_phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      us_active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      us_created_on: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      us_created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      us_update_on: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      us_update_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("user");
  },
};
