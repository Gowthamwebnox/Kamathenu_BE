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
exports.approveProductService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const approveProductService = (id, isApproved) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (isApproved) {
            const product = yield prisma.product.update({
                where: {
                    id: id
                },
                data: {
                    isApproved: true
                }
            });
            return product;
        }
        else {
            const product = yield prisma.product.update({
                where: {
                    id: id
                },
                data: {
                    isApproved: false
                }
            });
            return product;
        }
    }
    catch (error) {
        throw new Error("Error approving product");
    }
});
exports.approveProductService = approveProductService;
//# sourceMappingURL=approveProductService.js.map