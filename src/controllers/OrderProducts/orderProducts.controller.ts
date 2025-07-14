import { Request, Response } from "express";
import { orderUserProduct } from "../../services/OrderProductService/orderUserProduct";

export const orderProducts = async (req: Request, res: Response): Promise<any> => {
    // const {productId,userId}=req.body
    const userDetails=req.body 
    // console.log(userId,productId,amount,sellerId)
    console.log(userDetails)
    await orderUserProduct(userDetails)
       res.status(200).json({ message: "Order created successfully" })
}