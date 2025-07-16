import { Request, Response } from "express";
import { fetchOrderService } from "../../services/seller/fetchOrderService";

export const fetchSellerOrders=async(req:Request,res:Response)=>{
    // http://localhost:8000/api/seller/fetchSellerOrders/c6fe18bd-0e74-47f9-b8e1-83f1f93b9760
    try {
        const {sellerId}=req.params;
        const orders=await fetchOrderService(sellerId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}