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
exports.fetchSellerProduct = void 0;
const fetchSellerProductService_1 = require("../../services/seller/fetchSellerProductService");
const fetchSellerProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sellerId } = req.params;
        const { debouncedSearchTerm } = req.query;
        const parsedDebouncedSearchTerm = debouncedSearchTerm || '';
        const sellerProduct = yield (0, fetchSellerProductService_1.fetchSellerProductService)(sellerId, parsedDebouncedSearchTerm);
        res.status(200).json(sellerProduct);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.fetchSellerProduct = fetchSellerProduct;
//# sourceMappingURL=fetchSellerProduct.controller.js.map