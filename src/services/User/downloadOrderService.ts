import { PrismaClient } from "../../generated/prisma/client";


const prisma = new PrismaClient()

export const downloadOrderService = async (userId:string)=>{
    try{
        const orderPDF= await prisma.userDesignDocument.findMany({
            where:{
                userId:userId
            },
            include:{
                orderItem:{
                    include:{
                        product:true
                    }
                }
            }
        })
        return orderPDF
    }
    catch{
        throw new Error("Internal server error");
    }
}