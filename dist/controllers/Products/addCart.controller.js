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
exports.addCart = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const addCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    console.log(clientData);
    const addcartData = yield prisma.addCart.create({
        data: {
            userId: clientData.userId,
            productId: clientData.productId
        }
    });
    return res.status(200).json({ message: "Product added to cart" });
});
exports.addCart = addCart;
//# sourceMappingURL=addCart.controller.js.map