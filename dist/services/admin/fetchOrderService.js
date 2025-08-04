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
exports.fetchOrderService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const fetchOrderService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderItems = yield prisma.orderItem.findMany({
            include: {
                User: true,
                product: {
                    include: {
                        images: true,
                    }
                },
                order: true,
                UserDesignDocument: true,
            }
        });
        return orderItems;
    }
    catch (err) {
        throw new Error("Failed to fetch orders");
    }
});
exports.fetchOrderService = fetchOrderService;
//# sourceMappingURL=fetchOrderService.js.map