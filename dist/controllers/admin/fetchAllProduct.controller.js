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
exports.fetchAllProduct = void 0;
const fetchAllProductService_1 = require("../../services/admin/fetchAllProductService");
const fetchAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, search, limit, offset, sellerType, isApproved } = req.query;
        console.log({ search, limit, offset, sellerType, isApproved });
        // Parse and convert parameters to correct types
        const parsedLimit = parseInt(limit) || 10;
        const parsedOffset = parseInt(offset) || 0;
        const parsedSearch = search || undefined;
        const parsedSellerType = sellerType || undefined;
        const parsedIsApproved = isApproved === 'true' ? true :
            isApproved === 'false' ? false :
                true;
        const parsedUserId = userId || undefined;
        const products = yield (0, fetchAllProductService_1.fetchAllProductService)(parsedLimit, parsedOffset, parsedSearch, parsedSellerType, parsedIsApproved, parsedUserId);
        res.status(200).json(products);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
    }
});
exports.fetchAllProduct = fetchAllProduct;
//# sourceMappingURL=fetchAllProduct.controller.js.map