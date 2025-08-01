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
exports.getCategoryService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient;
const getCategoryService = (categoryName, limit) => __awaiter(void 0, void 0, void 0, function* () {
    // const results = await Promise.all(
    //   categoriesWithLimits.map(({ name, limit }) =>
    //     prisma.product.findMany({
    //       where: {
    //         category: {
    //           name,
    //         },
    //       },
    //       take: limit,
    //       include: {
    //         category: true,
    //         images: true,
    //       },
    //     })
    //   )
    // );
    const results = yield prisma.product.findMany({
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
        },
    });
    return results;
});
exports.getCategoryService = getCategoryService;
//# sourceMappingURL=getCategoryService.js.map