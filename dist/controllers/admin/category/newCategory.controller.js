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
exports.newCategory = void 0;
const newCategoryService_1 = require("../../../services/admin/newCategoryService");
const newCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryData = req.body;
        const category = yield (0, newCategoryService_1.newCategoryService)(categoryData);
        res.status(200).json({ message: "Category created successfully", category });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to create category" });
    }
});
exports.newCategory = newCategory;
//# sourceMappingURL=newCategory.controller.js.map