import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const newProductService = async (productData:any):Promise<any> => {
    try {
        const product=await prisma.product.create({
            data:{
                categoryId:productData.categoryId,
                name:productData.name,
                description:productData.description,
                isApproved:false,
                createdAt:new Date(),
                updatedAt:new Date(),
                aboutProduct:productData.aboutProduct,
                sellerId:productData.sellerId,
                price:productData.price,
            }
        })
        const productImage=await prisma.productImage.create({
            data:{
                productId:product.id,
                imageUrl:productData.imageUrl,
                imageLayerout:productData.imageUrl,
                createdAt:new Date(),
            }
        })
        const productDiscount=await prisma.productDiscount.create({
            data:{
                productId:product.id,
                discountType:productData.productDiscountType,
                discountValue:productData.productDiscountValue,
                startDate:productData.productDiscountStartDate,
                endDate:productData.productDiscountEndDate,
                createdAt:new Date(),
                updatedAt:new Date(),
            }
        })
        const productDetails=await prisma.productDetails.create({
            data:{
                productId:product.id,
                designInformation:productData.aboutProduct,
                designDeatils:productData.productOutput,
                packageDetails:productData.packageDetails,
                deliveryDetails:{deliveryDetails:productData.deliveryDetails,deliveryInstruction:productData.deliveryInstruction},
                createdAt:new Date(),
                updatedAt:new Date(),
            }
        })
        console.log("💕💕💕💕💕")
        console.log(product)
        console.log(productImage)
        console.log(productDiscount)
        console.log(productDetails)
        console.log("💕💕💕💕💕")
        return product;
    } catch (error) {
        
    }
};

