"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tokens",
      [
        {
          tkn_type: "access",
          tkn_value: "sample_access_token_1",
          tkn_description: "Access token for user 1",
          tkn_client_ip: "192.168.1.1",
          tkn_client_agent: "Mozilla/5.0",
          tkn_us_id: 1,
          tkn_expired_on: new Date(Date.now() + 3600 * 1000),
          tkn_active: true,
          tkn_created_on: new Date(),
          tkn_created_by: 1,
          tkn_updated_on: new Date(),
          tkn_updated_by: 1,
        },
        {
          tkn_type: "refresh",
          tkn_value: "sample_refresh_token_1",
          tkn_description: "Refresh token for user 1",
          tkn_client_ip: "192.168.1.1",
          tkn_client_agent: "Mozilla/5.0",
          tkn_us_id: 1,
          tkn_expired_on: new Date(Date.now() + 86400 * 1000),
          tkn_active: true,
          tkn_created_on: new Date(),
          tkn_created_by: 1,
          tkn_updated_on: new Date(),
          tkn_updated_by: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tokens", null, {});
  },
};
