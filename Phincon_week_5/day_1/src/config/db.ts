import { Sequelize } from "sequelize";

const sequelize = new Sequelize("day5_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

// sequelize.authenticate();

export default sequelize;

module.exports = sequelize;
