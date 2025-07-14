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
exports.wishlistProduct = void 0;
const addWishlist_1 = require("../../services/Product/addWishlist");
const wishlistProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, wishlistProductId, productId, wishlistId } = req.body;
    console.log(req.body);
    console.log(userId, wishlistProductId, productId, wishlistId);
    const wishlist = yield (0, addWishlist_1.addWishlist)(userId, productId);
    return res.status(200).json({
        message: "Product added to wishlist"
    });
});
exports.wishlistProduct = wishlistProduct;
//# sourceMappingURL=wishlistProduct.controller.js.map