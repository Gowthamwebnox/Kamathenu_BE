import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const newSellerRegistrationService = async (SellerData: any) => {
    try {
        // Check if seller profile already exists for this user
        const existingSeller = await prisma.sellerProfile.findUnique({
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
            seller = await prisma.sellerProfile.update({
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
           
        } else {
            // Create new seller profile
            seller = await prisma.sellerProfile.create({
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
        if (existingSeller?.bankAccount) {
            // Update existing bank account
            await prisma.bankAccountDetails.update({
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
             return 'Seller is already registered'
        } else {
            // Create new bank account
            await prisma.bankAccountDetails.create({
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
};   