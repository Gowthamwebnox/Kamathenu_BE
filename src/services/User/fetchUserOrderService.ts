import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient()


export const fetchUserOrderService = async (userId:string)=>{
    try{
        const userOrder= await prisma.order.findMany({
            where:{
                userId:userId
            },
            include:{
                items:{
                    include:{
                        product:{
                            include:{
                                images:true
                            }
                        }
                    }
                }
            }
        })
        return userOrder
    }
    catch{
        throw new Error("Internal server error");
    }
}