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
exports.fetchSellerOrders = void 0;
const fetchOrderService_1 = require("../../services/seller/fetchOrderService");
const fetchSellerOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // http://localhost:8000/api/seller/fetchSellerOrders/c6fe18bd-0e74-47f9-b8e1-83f1f93b9760
    try {
        const { sellerId } = req.params;
        const orders = yield (0, fetchOrderService_1.fetchOrderService)(sellerId);
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.fetchSellerOrders = fetchSellerOrders;
//# sourceMappingURL=fetchOrder.controller.js.map