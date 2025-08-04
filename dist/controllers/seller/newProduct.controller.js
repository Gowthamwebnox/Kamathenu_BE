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
Object.defineProperty(exports, "__esModule", { value: true });
exports.newProduct = void 0;
const newProductService_1 = require("../../services/seller/newProductService");
const newProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    // console.log("👌👌👌👌🔥🔥👌👌👌👌")
    // console.log(productData);
    try {
        const product = yield (0, newProductService_1.newProductService)(productData);
        res.status(200).json({ product });
    }
    catch (error) {
        res.status(500).json({ message: "Error in creating product" });
    }
});
exports.newProduct = newProduct;
//# sourceMappingURL=newProduct.controller.js.map