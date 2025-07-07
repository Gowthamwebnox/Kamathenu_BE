import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const addWishlist = async (userId:string,productId:string):Promise<any> => {
    const wishlist = await prisma.wishlist.create({
        data: {
            userId: userId,
            productId: productId
        }
    })

}