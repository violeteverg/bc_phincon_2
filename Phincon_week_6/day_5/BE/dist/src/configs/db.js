"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
const sequelize = new sequelize_1.Sequelize(config_1.development.database, config_1.development.username, config_1.development.password, {
    host: config_1.development.host,
    port: config_1.development.port,
    dialect: config_1.development.dialect,
});
exports.default = sequelize;
