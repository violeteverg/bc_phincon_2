import { Sequelize } from "sequelize";

const sequelize = new Sequelize("simple-table", "postgres", "udin12", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
});
export default sequelize;

module.exports = sequelize;
