import { PrismaClient } from "../../generated/prisma";

const prisma=new PrismaClient();

export const fetchOrderService=async(sellerId:string)=>{
    const orders=await prisma.orderItem.findMany({
        where:{
            sellerId:sellerId
        },
        include:{
            User:true,
            product:{
                include:{
                    images:true,
                }
            },
            order:true,
            
            
        }
    })
    return orders;
}