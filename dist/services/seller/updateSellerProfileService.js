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
exports.updateSellerProfileService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const updateSellerProfileService = (sellerProfile, sellerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateSellerProfile = yield prisma.sellerProfile.update({
            where: {
                id: sellerId
            },
            data: {
                sellerName: sellerProfile.user.name,
                storeName: sellerProfile.storeName,
                storeDescription: sellerProfile.storeDescription,
                upiId: sellerProfile.upiId,
                gstn: sellerProfile.gstNumber,
            }
        });
        return updateSellerProfile;
    }
    catch (_a) {
        throw new Error("Internal Server Error");
    }
});
exports.updateSellerProfileService = updateSellerProfileService;
//# sourceMappingURL=updateSellerProfileService.js.map