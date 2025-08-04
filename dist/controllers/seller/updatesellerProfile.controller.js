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
exports.updateSellerProfile = void 0;
const updateSellerProfileService_1 = require("../../services/seller/updateSellerProfileService");
const updateSellerProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerProfile = req.body;
        const sellerId = req.params.sellerId;
        console.log(sellerProfile, sellerId);
        const updateSellerProfile = yield (0, updateSellerProfileService_1.updateSellerProfileService)(sellerProfile, sellerId);
        res.status(200).json({
            success: true,
            message: "Seller Profile Updated Successfully",
            data: updateSellerProfile
        });
    }
    catch (_a) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});
exports.updateSellerProfile = updateSellerProfile;
//# sourceMappingURL=updatesellerProfile.controller.js.map