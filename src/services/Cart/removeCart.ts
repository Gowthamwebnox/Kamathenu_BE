import { PrismaClient } from "../../generated/prisma";

const prisma=new PrismaClient

export const removeCart = async (cartId:string)=>{
    const cart=await prisma.addCart.delete({
        where:{
            id:cartId
        }
    })
}