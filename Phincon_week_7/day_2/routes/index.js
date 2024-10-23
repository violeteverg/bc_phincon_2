const matchRouter = require("./match");
const { userRouter } = require("./user");
const { Router } = require("express");

const routes = Router();

routes.use("/", userRouter);
routes.use("/", matchRouter);

module.exports = {
  routes,
};
