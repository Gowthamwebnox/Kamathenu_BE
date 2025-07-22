import { Request, Response } from "express";
import { updateOrderService } from "../../services/seller/updateOrderService";


export const updateOrder=async(req:Request,res:Response)=>{
    try {
        const order=req.body;
        console.log(order);
        const updatedOrder=await updateOrderService(order);
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}