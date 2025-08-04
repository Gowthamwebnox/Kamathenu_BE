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
exports.newSellerRegistration = void 0;
const newSellerRegistrationService_1 = require("../../services/seller/newSellerRegistrationService");
const newSellerRegistration = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sellerData = req.body;
        console.log(sellerData);
        const seller = yield (0, newSellerRegistrationService_1.newSellerRegistrationService)(sellerData);
        // res.status(201).json(seller);
        res.status(201).json({ seller });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.newSellerRegistration = newSellerRegistration;
//# sourceMappingURL=newSellerRegistration.controller.js.map