import express from "express";
import cors from "cors";
import bodyParser, { json } from "body-parser";
import { Redis } from "ioredis";

const app = express();
const port = 3000;

const redis = new Redis({
  port: 6379,
  host: "localhost",
});
redis.on("connect", () => {
  console.log("redis already connect");
});
redis.on("error", async (error) => {
  console.log("redis doesnt want connect", error);
  await redis.quit();
});
app.use(cors());
app.use(bodyParser.json());

app.get("/cache", async (req, res) => {
  const cachedData = await redis.get("test");
  if (!cachedData) {
    res.send(`cannot find`, jso);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
