import { Request, Response } from "express";
import { downloadOrderService } from "../../services/User/downloadOrderService";

export const downloadOrder = async (req:Request,res:Response)=>{
  
    try{
        const userDetails=req.params.userId;
        const orderPDF=await downloadOrderService(userDetails);
        res.status(200).json(orderPDF);
    }
    catch{
        res.status(500).json({message:"Internal server error"});
    }
}