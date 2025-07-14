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
exports.wishlistRemove = void 0;
const removeWishlist_1 = require("../../services/Product/removeWishlist");
const wishlistRemove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, wishlistProductId, productId, wishlistId } = req.body;
    try {
        const wishlist = yield (0, removeWishlist_1.removeWishlist)(userId, productId);
        return res.status(200).json({
            message: wishlist
        });
    }
    catch (error) {
        return res.status(404).json({
            message: error instanceof Error ? error.message : "Wishlist item not found"
        });
    }
});
exports.wishlistRemove = wishlistRemove;
//# sourceMappingURL=wishlistRemove.controller.js.map