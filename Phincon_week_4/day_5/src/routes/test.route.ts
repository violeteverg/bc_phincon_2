import { Request, Response, Router } from "express";

const testRoute = Router();

testRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello, Test");
});

export default testRoute;
