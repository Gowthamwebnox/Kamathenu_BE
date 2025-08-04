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
exports.newCategoryService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const newCategoryService = (categoryData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield prisma.category.create({
            data: {
                name: categoryData.name,
                description: categoryData.description,
                image: categoryData.imageUrl,
            }
        });
        console.log(category);
        return category;
    }
    catch (err) {
        throw new Error("Failed to create category");
    }
});
exports.newCategoryService = newCategoryService;
//# sourceMappingURL=newCategoryService.js.map