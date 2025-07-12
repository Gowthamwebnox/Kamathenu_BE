import { PrismaClient } from "../../generated/prisma/client"

const prisma = new PrismaClient()


export const orderUserProduct = async (userData:any) => {
    

    const order = await prisma.order.create({
        data: {
            userId:userData.userId,
            totalAmount: userData.totalAmount,
        }
    })
    console.log(order)
    const orderItems=userData.userOrderData.map((item:any)=>{
        return{
            orderId:order.id,
            productId:item.productId,
            sellerId:item.sellerId,
            priceAtPurchase:item.amount,
            status:"pending"
        }
    })  
    console.log(orderItems)  
    const orderItem= await prisma.orderItem.createMany({
        data:orderItems
    })
    if(userData?.cart){
    const cart=await prisma.addCart.deleteMany({            
        where:{
            userId:userData.userId
        } 
    })  
    console.log(orderItem)
    }
}