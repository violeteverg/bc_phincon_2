"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./src/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use(body_parser_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/", routes_1.default);
app.get("/", (req, res) => {
    res.send("hello");
});
// app.use("/api", routes);
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
