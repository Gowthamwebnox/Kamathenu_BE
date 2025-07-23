import { PrismaClient } from "../../generated/prisma/client";



const prisma =new PrismaClient();
export const fetchOrderService=async()=>{
    try{
        const orderItems=await prisma.orderItem.findMany({
            include:{
                User:true,
            product:{
                include:{
                    images:true,
                }
            },
            order:true,
            UserDesignDocument:true,
            }
        })
        return orderItems;
    }
    catch(err){
        throw new Error("Failed to fetch orders");
    }
}