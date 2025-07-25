import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const fetchDashboardService = async (id: string) => {
    try {
        const user =await prisma.user.count();
        const sellerOrder = await prisma.orderItem.count({
            where:{
                sellerId:id
            }
        })

        const sellerProduct =await prisma.orderItem.count({
            where:{
                sellerId:id,
                status:{
                    in:["delivered"]
                }
            }

        })
        return{
            user,
            sellerOrder,
            sellerProduct
        }
        

        
    } catch (error) {
        throw new Error("Error fetching dashboard");
    }
}   