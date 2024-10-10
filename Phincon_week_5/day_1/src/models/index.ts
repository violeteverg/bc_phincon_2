import sequelize from "../config/db";
import { Sequelize } from "sequelize";

import User from "./user";
import Profile from "./profile";
import Role from "./role";
import Token from "./token";
import UserRole from "./userRole";
let db: any = {};
const models = [User, Profile, Role, Token, UserRole];
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
