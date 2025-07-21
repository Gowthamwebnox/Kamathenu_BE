import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();


export const fetchSellerService = async (userId:string) => {
    const sellers = await prisma.sellerProfile.findMany({
        where:{
            userId:userId
        }
    });
    return sellers;
}