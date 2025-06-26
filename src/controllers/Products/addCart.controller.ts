import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const addCart = async (req:Request,res:Response):Promise<any>=>{
    const clientData=req.body
    console.log(clientData)
    const addcartData=await prisma.addCart.create({
        data:{
            userId:clientData.userId,
            productId:clientData.productId
        }
    })
    return res.status(200).json({message:"Product added to cart"})
}