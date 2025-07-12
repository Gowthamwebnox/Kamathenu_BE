import { PrismaClient } from "../../generated/prisma/client"

const prisma=new PrismaClient()


export const fetchUserOrderService = async (userId:string)=>{
    const order=await prisma.order.findMany({
        where:{
            userId:userId
        },
        include:{
            items:{
                include:{
                    product:true
                }
            }
        }
    })
    return order
}