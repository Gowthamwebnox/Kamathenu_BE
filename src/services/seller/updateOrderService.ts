import { PrismaClient } from "../../generated/prisma";


const prisma= new PrismaClient();

export const updateOrderService=async(order:any)=>{
    try {
        const updatedOrder=await prisma.orderItem.update({
            where:{id:order.orderId},
            data:{status:order.orderStauts,
                designDocument:order.designUrl,
            }
        })
        
        console.log(updatedOrder);
        return updatedOrder;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to update order");
    }
}