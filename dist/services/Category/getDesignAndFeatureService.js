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
exports.getDesignAndFeatureService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient;
const getDesignAndFeatureService = (clientData) => __awaiter(void 0, void 0, void 0, function* () {
    const { categoryName, limit } = clientData;
    console.log("categoryName👍👍👍👍👍👍👍👍", categoryName);
    const designData = yield prisma.product.findMany({
        where: {
            category: {
                name: categoryName,
            },
        },
        take: limit,
        include: {
            category: true,
            images: true,
            discounts: true,
            reviews: true,
            seller: true,
            wishlist: true,
        },
    });
    return designData;
});
exports.getDesignAndFeatureService = getDesignAndFeatureService;
//# sourceMappingURL=getDesignAndFeatureService.js.map