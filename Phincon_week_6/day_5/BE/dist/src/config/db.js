"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("simple-table", "postgres", "udin12", {
    host: "localhost",
    dialect: "postgres",
    port: 5432,
    define: {
        timestamps: false,
    },
});
exports.default = sequelize;
module.exports = sequelize;
