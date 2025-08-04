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
exports.fetchSellerProfileService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient;
const fetchSellerProfileService = (sellerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerProfileData = yield prisma.sellerProfile.findUnique({
            where: {
                id: sellerId
            },
            include: {
                bankAccount: true,
                user: true,
            }
        });
        return sellerProfileData;
    }
    catch (error) {
        return { message: "Internal server error" };
    }
});
exports.fetchSellerProfileService = fetchSellerProfileService;
//# sourceMappingURL=fetchSellerProfileService.js.map