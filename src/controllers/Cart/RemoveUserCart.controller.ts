import { Request, Response } from "express";
import { removeCart } from "../../services/Cart/removeCart";

export const RemoveUserCart = async (req:Request,res:Response):Promise<any>=>{
    const {cartId}=req.body
    console.log(cartId)
    const cart=await removeCart(cartId)
    res.status(200).json({message:"Cart removed successfully"})
}