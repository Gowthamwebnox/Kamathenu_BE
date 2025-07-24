import { PrismaClient } from "../../generated/prisma"


const prisma = new PrismaClient()
export const approveSellerService = async (sellerDetial:any)=>{
    try{
        if(sellerDetial.isApproved==true){
            const seller=await prisma.sellerProfile.update({
                where:{
                    id:sellerDetial.sellerId
                },
                data:{
                    status:"Approved",
                }
            })
            if(!seller){
                throw new Error("Seller not found")
            }
            const updatedUserRole=await prisma.user.update({
                where:{
                    id:seller.userId
                },
                data:{
                    roleId:"SELLER"
                }
            })
            return seller;
        }
        else{
            const seller=await prisma.sellerProfile.update({
                where:{
                    id:sellerDetial.sellerId
                },
                data:{
                    status:"Pending",
                }
            })
            if(!seller){
                throw new Error("Seller not found")
            }
            const updatedUserRole=await prisma.user.update({
                where:{
                    id:seller.userId
                },
                data:{
                    roleId:"USER"
                }
            })
            return seller;
        }
    }
    catch(err){
        throw new Error("Failed to approve seller")
    }

}