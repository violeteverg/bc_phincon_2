require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { routes } = require("./routes");
const cookieParser = require("cookie-parser");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
