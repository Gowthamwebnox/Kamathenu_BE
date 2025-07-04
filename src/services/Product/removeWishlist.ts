import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const removeWishlist = async (userId:string,wishlistProductId:string,productId:string,wishlistId:string):Promise<any> => {
    const wishlist = await prisma.wishlist.delete({
        where: {
            id: wishlistId
        }
    })
    return "removedWishlist";
}