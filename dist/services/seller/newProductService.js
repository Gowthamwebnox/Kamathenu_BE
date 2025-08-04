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
exports.newProductService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const newProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield prisma.product.create({
            data: {
                categoryId: productData.categoryId,
                name: productData.name,
                description: productData.description,
                isApproved: false,
                createdAt: new Date(),
                updatedAt: new Date(),
                aboutProduct: productData.aboutProduct,
                sellerId: productData.sellerId,
                price: productData.price,
            }
        });
        console.log("👌👌👌👌👍👍👍👍👍👍👍👌👌👌👌");
        console.log(product);
        const productImage = yield prisma.productImage.create({
            data: {
                productId: product.id,
                imageUrl: productData.images,
                // imageLayerout:productData.imageUrl,
                createdAt: new Date(),
            }
        });
        const productDiscount = yield prisma.productDiscount.create({
            data: {
                productId: product.id,
                discountType: productData.productDiscountType,
                discountValue: productData.productDiscountValue,
                startDate: new Date(productData.productDiscountStartDate),
                endDate: new Date(productData.productDiscountEndDate),
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });
        const productDetails = yield prisma.productDetails.create({
            data: {
                productId: product.id,
                designInformation: productData.aboutProduct,
                designDeatils: productData.productOutput,
                packageDetails: productData.packageDetails,
                deliveryDetails: { deliveryDetails: productData.deliveryDetails, deliveryInstruction: productData.deliveryInstruction },
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        });
        // console.log("💕💕💕💕💕")
        console.log(product);
        console.log(productImage);
        console.log(productDiscount);
        console.log(productDetails);
        // console.log("💕💕💕💕💕")
        return product;
    }
    catch (error) {
        console.log(error);
    }
});
exports.newProductService = newProductService;
//# sourceMappingURL=newProductService.js.map