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
exports.fetchAllProductService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const fetchAllProductService = (limit, offset, search, sellerType, isApproved, userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Build the where clause conditionally
    const whereClause = {};
    // Add search condition if search is provided
    if (search && search.trim() !== '') {
        whereClause.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
        ];
    }
    // Add sellerType condition if provided
    if (sellerType === 'inHouse') {
        // Assuming inHouse sellers are those with roleId "SELLER" and approved status
        whereClause.sellerId = userId;
    }
    else if (sellerType === 'external') {
        // External sellers might be those with different criteria
        whereClause.sellerId = {
            not: userId
        };
    }
    console.log("Where clause:", JSON.stringify(whereClause, null, 2));
    const products = yield prisma.product.findMany({
        where: Object.assign({ isApproved: isApproved }, whereClause),
        take: limit,
        skip: offset,
        include: {
            category: true,
            seller: {
                include: {
                    user: true
                }
            },
            images: true,
            reviews: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    console.log(products);
    return products;
});
exports.fetchAllProductService = fetchAllProductService;
//# sourceMappingURL=fetchAllProductService.js.map