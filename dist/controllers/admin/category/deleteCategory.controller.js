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
exports.deleteCategory = void 0;
const deleteCategoryService_1 = require("../../../services/admin/deleteCategoryService");
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categoryId = req.params.categoryId;
        const category = yield (0, deleteCategoryService_1.deleteCategoryService)(categoryId);
        res.status(200).json({ message: "Category deleted successfully", category });
    }
    catch (err) {
        res.status(500).json({ message: "Failed to delete category" });
    }
});
exports.deleteCategory = deleteCategory;
//# sourceMappingURL=deleteCategory.controller.js.map