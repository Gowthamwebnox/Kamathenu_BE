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
exports.orderUserProduct = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const orderUserProduct = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield prisma.order.create({
        data: {
            userId: userData.userId,
            totalAmount: userData.totalAmount,
        }
    });
    console.log(order);
    const orderItems = userData.userOrderData.map((item) => {
        return {
            orderId: order.id,
            productId: item.productId,
            sellerId: item.sellerId,
            priceAtPurchase: item.amount,
            status: "pending"
        };
    });
    console.log(orderItems);
    const orderItem = yield prisma.orderItem.createMany({
        data: orderItems
    });
    if (userData === null || userData === void 0 ? void 0 : userData.cart) {
        const cart = yield prisma.addCart.deleteMany({
            where: {
                userId: userData.userId
            }
        });
        console.log(orderItem);
    }
});
exports.orderUserProduct = orderUserProduct;
//# sourceMappingURL=orderUserProduct.js.map