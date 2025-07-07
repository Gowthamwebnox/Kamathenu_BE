import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const removeWishlist = async (userId: string, productId: string): Promise<any> => {
    const wishlist = await prisma.wishlist.deleteMany({
        where: {
            userId: userId,
            productId: productId
        }
    });
    
    
    
    return "removedWishlist";
}