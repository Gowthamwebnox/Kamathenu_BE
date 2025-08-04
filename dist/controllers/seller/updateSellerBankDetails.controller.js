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
exports.updateSellerBankDetails = void 0;
const updateSellerBankDetailService_1 = require("../../services/seller/updateSellerBankDetailService");
const updateSellerBankDetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bankDetails = req.body;
        const sellerId = req.params.sellerId;
        const updateSellerBankDetails = yield (0, updateSellerBankDetailService_1.updateSellerBankDetailService)(bankDetails, sellerId);
        res.status(200).json({
            success: true,
            message: "Seller Bank Details Updated Successfully",
            data: updateSellerBankDetails
        });
    }
    catch (_a) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
});
exports.updateSellerBankDetails = updateSellerBankDetails;
//# sourceMappingURL=updateSellerBankDetails.controller.js.map