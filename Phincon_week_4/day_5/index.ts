import express, { Request, Response } from "express";
import routes from "./src/routes";
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.use(routes);

// app.get("/", (req: Request, res: Response) => {
//   res.send("hello");
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
