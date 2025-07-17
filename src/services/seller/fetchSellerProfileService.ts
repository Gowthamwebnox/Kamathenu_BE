import { PrismaClient } from "../../generated/prisma/client"


const prisma =new PrismaClient
export const fetchSellerProfileService = async (sellerId:string):Promise<any>=>{
    try {
        const sellerProfileData= await prisma.sellerProfile.findUnique({
            where:{
                id:sellerId
            },
            include:{
                bankAccount:true,
                user:true,
            }
        })
        return sellerProfileData;
    } catch (error) {
        return {message:"Internal server error"};
    }
}