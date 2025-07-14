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
const getCategoryService_1 = require("../../services/Category/getCategoryService");
const getCategoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = req.body;
        const categoryData = {};
        for (let i = 0; i < client.length; i++) {
            const category = client[i];
            const categoryName = category.categoryName;
            const limit = category.limit;
            const categories = yield (0, getCategoryService_1.getCategoryService)(categoryName, limit);
            categoryData[categoryName] = categories;
        }
        // const categories = await getCategoryService();
        res.status(200).json({ message: "Category fetched successfully", data: categoryData });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to fetch categories" });
    }
});
exports.default = getCategoryController;
//# sourceMappingURL=getCategory.controller.js.map