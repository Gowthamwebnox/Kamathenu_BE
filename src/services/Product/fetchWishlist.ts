import { PrismaClient } from "../../generated/prisma/client";


const prisma = new PrismaClient();

export const fetchWishlistService = async (userId: string):Promise<any> => {
    const wishlist = await prisma.wishlist.findMany({
        where:{
            userId:userId
        },
        include:{
            product:{
                include:{
                    variants:true,
                    images:true,
                    reviews:true,
                    seller:true,
                    category:true,
                }
            }
        }
    })
    return wishlist;
}





