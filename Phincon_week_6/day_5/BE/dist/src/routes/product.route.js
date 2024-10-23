"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controllers_1 = require("../controller/product.controllers");
const productRouter = (0, express_1.Router)();
const prodcutController = new product_controllers_1.ProuctController();
productRouter.get("/allproduct", prodcutController.findAll);
exports.default = productRouter;
