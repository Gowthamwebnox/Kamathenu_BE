import { PrismaClient } from "../../generated/prisma";

const prisma=new PrismaClient

export const displayUserCart = async (userId: string) => {
    const cart = await prisma.addCart.findMany({
        where:{
            userId:userId
        },
        include:{
            product:{
                include:{
                    images:true,
                    reviews:true
                }
            }
        }
    });
    return cart;
}

