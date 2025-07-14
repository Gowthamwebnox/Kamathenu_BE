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
exports.fetchWishlist = void 0;
const fetchWishlist_1 = require("../../services/Product/fetchWishlist");
const fetchWishlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        console.log(userId);
        const wishlist = yield (0, fetchWishlist_1.fetchWishlistService)(userId);
        res.status(200).json({ wishlist });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.fetchWishlist = fetchWishlist;
//# sourceMappingURL=fetchWishlist.controller.js.map