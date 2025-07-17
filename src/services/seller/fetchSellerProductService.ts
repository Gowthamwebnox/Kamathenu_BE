import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient();
export const fetchSellerProductService = async (sellerId: string):Promise<any> => {
    const sellerProduct = await prisma.product.findMany({
        where: {
            sellerId: sellerId
        },
        include:{
            images:true,
            discounts:true
        }
    });
    console.log("💕💕💕💕💕")
    console.log(sellerProduct)
    console.log("💕💕💕💕💕")
    return sellerProduct;
}
