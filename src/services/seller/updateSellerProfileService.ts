import { PrismaClient } from "../../generated/prisma/client"

        

const prisma= new PrismaClient()


export const updateSellerProfileService=async(sellerProfile:any,sellerId:any)=>{
    try{
        const updateSellerProfile=await prisma.sellerProfile.update({
            where:{
                id:sellerId
            },
            data:{
                sellerName:sellerProfile.user.name,
                storeName:sellerProfile.storeName,
                storeDescription:sellerProfile.storeDescription,
                upiId:sellerProfile.upiId,
                gstn:sellerProfile.gstNumber,
            }
        })
        return updateSellerProfile
    }
    catch{
        throw new Error("Internal Server Error")
    }
}