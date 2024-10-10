import { Router } from "express";
import userRouter from "./login";

const routes = Router();

routes.use("/auth", userRouter);

export default routes;
