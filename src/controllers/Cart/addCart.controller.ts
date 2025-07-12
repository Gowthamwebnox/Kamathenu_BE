

import { Request, Response } from "express";
import { addUserCart } from "../../services/Cart/addUserCart";

export const addCart = async (req:Request,res:Response):Promise<any>=>{
    const {productId,userId}=req.body
    console.log(productId,userId)
    console.log("✨✨✨✨✨✨✨")
    const cart=await addUserCart(productId,userId)
    return res.status(200).json({message:"Cart added successfully",cart:cart})

}