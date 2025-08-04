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
exports.fetchSellerProfile = void 0;
const fetchSellerProfileService_1 = require("../../services/seller/fetchSellerProfileService");
const fetchSellerProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { sellerId } = req.params;
        console.log(sellerId);
        const sellerProfile = yield (0, fetchSellerProfileService_1.fetchSellerProfileService)(sellerId);
        res.status(200).json(sellerProfile);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.fetchSellerProfile = fetchSellerProfile;
//# sourceMappingURL=fetchSellerProfile.controller.js.map