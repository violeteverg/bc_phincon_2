const { Router } = require("express");
const {
  createMatch,
  getAllMatch,
  compateMatch,
  getAllScore,
} = require("../controllers/match");

const matchRouter = Router();

matchRouter.post("/creatematch", createMatch);
matchRouter.get("/getallmatch", getAllMatch);
matchRouter.patch("/compete", compateMatch);
matchRouter.get("/score", getAllScore);

module.exports = matchRouter;
