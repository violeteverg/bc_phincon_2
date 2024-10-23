"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const sequelize_1 = require("sequelize");
const product_1 = __importDefault(require("./product"));
const category_1 = __importDefault(require("./category"));
let db = {};
const models = [product_1.default, category_1.default];
models.forEach((model) => {
    db[model.name] = model;
});
models.forEach((model) => {
    if (db[model.name].associate) {
        db[model.name].associate(db);
    }
});
db.sequelize = db_1.default;
db.Sequelize = sequelize_1.Sequelize;
exports.default = db;
