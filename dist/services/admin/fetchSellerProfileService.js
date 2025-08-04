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
const prisma = new client_1.PrismaClient();
const fetchSellerProfileService = (search, limit, offset, isApproved) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(search, limit, offset, isApproved);
    const sellerProfile = yield prisma.sellerProfile.findMany({
        where: {
            OR: [
                { sellerName: { contains: search, mode: 'insensitive' } },
                { storeName: { contains: search, mode: 'insensitive' } }
            ],
            status: isApproved
        },
        skip: offset,
        take: limit,
        orderBy: {
            createdAt: 'desc'
        }
    });
    return sellerProfile;
});
exports.fetchSellerProfileService = fetchSellerProfileService;
//# sourceMappingURL=fetchSellerProfileService.js.map