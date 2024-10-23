import sequelize from "../config/db";
import { Sequelize } from "sequelize";
import Product from "./product";
import Category from "./category";

let db: any = {};
const models = [Product, Category];
models.forEach((model) => {
  db[model.name] = model;
});
models.forEach((model) => {
  if (db[model.name].associate) {
    db[model.name].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
