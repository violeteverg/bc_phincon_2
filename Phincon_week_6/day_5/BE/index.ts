import bodyParser from "body-parser";

import express, { Request, Response } from "express";

import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./src/routes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", router);

app.get("/", (req: Request, res: Response) => {
  res.send("hello");
});
// app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
