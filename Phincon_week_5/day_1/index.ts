import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import routes from "./src/routes";
import dotenv from "dotenv";
import Profile from "./src/models/profile";
import User from "./src/models/user";
import Role from "./src/models/role";
import UserRole from "./src/models/userRole";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ credentials: true, origin: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.get("/", (req: Request, res: Response) => {
//   res.send("hello");
// });
app.use("/api", routes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
