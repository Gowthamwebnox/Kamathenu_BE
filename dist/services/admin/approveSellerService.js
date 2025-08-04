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
exports.approveSellerService = void 0;
const prisma_1 = require("../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const approveSellerService = (sellerDetial) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (sellerDetial.isApproved == true) {
            const seller = yield prisma.sellerProfile.update({
                where: {
                    id: sellerDetial.sellerId
                },
                data: {
                    status: "Approved",
                }
            });
            if (!seller) {
                throw new Error("Seller not found");
            }
            const updatedUserRole = yield prisma.user.update({
                where: {
                    id: seller.userId
                },
                data: {
                    roleId: "SELLER"
                }
            });
            return seller;
        }
        else {
            const seller = yield prisma.sellerProfile.update({
                where: {
                    id: sellerDetial.sellerId
                },
                data: {
                    status: "Pending",
                }
            });
            if (!seller) {
                throw new Error("Seller not found");
            }
            const updatedUserRole = yield prisma.user.update({
                where: {
                    id: seller.userId
                },
                data: {
                    roleId: "USER"
                }
            });
            return seller;
        }
    }
    catch (err) {
        throw new Error("Failed to approve seller");
    }
});
exports.approveSellerService = approveSellerService;
//# sourceMappingURL=approveSellerService.js.map