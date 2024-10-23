import { Router } from "express";
import { ProuctController } from "../controller/product.controllers";

const productRouter = Router();
const prodcutController: any = new ProuctController();
productRouter.get("/allproduct", prodcutController.findAll);

export default productRouter;
