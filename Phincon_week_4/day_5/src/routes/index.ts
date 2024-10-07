import { Router } from "express";
import userRoute from "./user.route";
import testRoute from "./test.route";

const routes = Router();

routes.use("/user", userRoute);
routes.use("/test", testRoute);

export default routes;
