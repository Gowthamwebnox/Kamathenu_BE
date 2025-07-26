import { Request, Response } from "express";
import { fetchUserOrderService } from "../../services/User/fetchUserOrderService";

export const fetchUserOrder = async (req:Request,res:Response)=>{
    try{
        const userDetails=req.params.userId;
        const userOrder=await fetchUserOrderService(userDetails);
        res.status(200).json(userOrder);
    }
    catch{
        res.status(500).json({message:"Internal server error"});
    }
}   