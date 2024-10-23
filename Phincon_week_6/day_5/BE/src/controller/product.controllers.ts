import { Request, Response } from "express";
import Product from "../models/product";
import Category from "../models/category";

export class ProuctController {
  async findAll(req: Request, res: Response) {
    try {
      const product = await Product.findAll();
      console.log(product, "<<<");
      return res.status(200).json({
        code: 200,
        message: "Ok",
        data: product,
      });
    } catch (error) {
      return res.status(400).json({
        code: 400,
        meesage: "failed",
        error: error,
      });
    }
  }
}
