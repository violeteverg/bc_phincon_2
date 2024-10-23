"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProuctController = void 0;
const product_1 = __importDefault(require("../models/product"));
class ProuctController {
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield product_1.default.findAll();
                console.log(product, "<<<");
                return res.status(200).json({
                    code: 200,
                    message: "Ok",
                    data: product,
                });
            }
            catch (error) {
                return res.status(400).json({
                    code: 400,
                    meesage: "failed",
                    error: error,
                });
            }
        });
    }
}
exports.ProuctController = ProuctController;
