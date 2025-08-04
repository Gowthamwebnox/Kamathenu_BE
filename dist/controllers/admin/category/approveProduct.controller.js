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
exports.approveProduct = void 0;
const approveProductService_1 = require("../../../services/admin/approveProductService");
const approveProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { isApproved } = req.body;
        const product = yield (0, approveProductService_1.approveProductService)(id, isApproved);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: "Error approving product" });
    }
});
exports.approveProduct = approveProduct;
//# sourceMappingURL=approveProduct.controller.js.map