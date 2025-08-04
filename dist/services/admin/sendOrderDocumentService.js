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
exports.sendOrderDocumentService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const sendOrderDocumentService = (orderDocument) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(orderDocument);
    try {
        if (orderDocument === null || orderDocument === void 0 ? void 0 : orderDocument.id) {
            const userDocument = yield prisma.userDesignDocument.delete({
                where: {
                    id: orderDocument.id
                }
            });
            console.log(userDocument);
            return userDocument;
        }
        else {
            const userDocument = yield prisma.userDesignDocument.create({
                data: {
                    userId: orderDocument.userId,
                    orderItemId: orderDocument.orderId,
                    document: orderDocument.designUrl,
                }
            });
            console.log(userDocument);
            return userDocument;
        }
    }
    catch (err) {
        throw new Error("Failed to send order document");
    }
});
exports.sendOrderDocumentService = sendOrderDocumentService;
//# sourceMappingURL=sendOrderDocumentService.js.map