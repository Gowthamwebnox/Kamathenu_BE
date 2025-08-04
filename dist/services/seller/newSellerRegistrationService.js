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
exports.newSellerRegistrationService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const newSellerRegistrationService = (SellerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Check if seller profile already exists for this user
        const existingSeller = yield prisma.sellerProfile.findUnique({
            where: {
                userId: SellerData.userId
            },
            include: {
                bankAccount: true
            }
        });
        let seller;
        if (existingSeller) {
            // Update existing seller profile
            seller = yield prisma.sellerProfile.update({
                where: {
                    userId: SellerData.userId
                },
                data: {
                    sellerName: SellerData.fullName,
                    storeName: SellerData.storeName,
                    storeDescription: SellerData.storeDescription,
                    upiId: SellerData.upiId,
                    address: SellerData.address,
                    gstn: SellerData.gstn,
                    pincode: SellerData.pincode,
                }
            });
        }
        else {
            // Create new seller profile
            seller = yield prisma.sellerProfile.create({
                data: {
                    userId: SellerData.userId,
                    sellerName: SellerData.fullName,
                    storeName: SellerData.storeName,
                    storeDescription: SellerData.storeDescription,
                    upiId: SellerData.upiId,
                    address: SellerData.address,
                    gstn: SellerData.gstn,
                    pincode: SellerData.pincode,
                }
            });
        }
        // Handle bank account details
        if (existingSeller === null || existingSeller === void 0 ? void 0 : existingSeller.bankAccount) {
            // Update existing bank account
            yield prisma.bankAccountDetails.update({
                where: {
                    sellerProfileId: seller.id
                },
                data: {
                    accountHolderName: SellerData.accountHolderName,
                    accountNumber: SellerData.accountNumber,
                    accountType: SellerData.accountType,
                    bankName: SellerData.bankName,
                    ifscCode: SellerData.ifscCode,
                }
            });
            return 'Seller is already registered';
        }
        else {
            // Create new bank account
            yield prisma.bankAccountDetails.create({
                data: {
                    sellerProfileId: seller.id,
                    accountHolderName: SellerData.accountHolderName,
                    accountNumber: SellerData.accountNumber,
                    accountType: SellerData.accountType,
                    bankName: SellerData.bankName,
                    ifscCode: SellerData.ifscCode,
                }
            });
        }
        return "seller registered successfully";
    }
    catch (error) {
        console.log(error);
        throw error;
    }
});
exports.newSellerRegistrationService = newSellerRegistrationService;
//# sourceMappingURL=newSellerRegistrationService.js.map