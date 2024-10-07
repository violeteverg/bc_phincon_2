import { Request, Response, Router } from "express";

const userRoute = Router();

userRoute.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript with Express!");
});

export default userRoute;
