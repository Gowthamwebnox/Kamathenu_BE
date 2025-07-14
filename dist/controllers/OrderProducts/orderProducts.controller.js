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
exports.orderProducts = void 0;
const orderUserProduct_1 = require("../../services/OrderProductService/orderUserProduct");
const orderProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const {productId,userId}=req.body
    const userDetails = req.body;
    // console.log(userId,productId,amount,sellerId)
    console.log(userDetails);
    yield (0, orderUserProduct_1.orderUserProduct)(userDetails);
    res.status(200).json({ message: "Order created successfully" });
});
exports.orderProducts = orderProducts;
//# sourceMappingURL=orderProducts.controller.js.map