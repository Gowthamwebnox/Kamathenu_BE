import { PrismaClient } from "../../generated/prisma/client";

const prisma=new PrismaClient

export const addUserCart = async (productId:string,userId:string)=>{
    const cart=await prisma.addCart.create({
        data:{
            productId,
            userId
        }
    })
    return cart
}