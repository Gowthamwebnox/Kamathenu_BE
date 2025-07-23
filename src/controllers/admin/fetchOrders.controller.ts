import { Request, Response } from "express";
import { fetchOrderService } from "../../services/admin/fetchOrderService";


export const fetchOrders=async(req:Request,res:Response)=>{
    try{
        const orders=await fetchOrderService();
        res.status(200).json({orders})
    }
    catch(err){
        res.status(500).json({message:"Failed to fetch orders"})
    }
}