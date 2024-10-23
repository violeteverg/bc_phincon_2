"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.production = exports.test = exports.development = void 0;
const development = {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "ryujin12",
    database: "simple-table",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
};
exports.development = development;
const test = {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "ryujin12",
    database: "simple-table",
    host: "localhost",
    port: 5432,
    dialect: "mysql",
};
exports.test = test;
const production = {
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASS || "ryujin12",
    database: "simple-table",
    host: "localhost",
    port: 5432,
    dialect: "mysql",
};
exports.production = production;
