import { Request, Response } from "express";
import { approveSellerService } from "../../../services/admin/approveSellerService";

export const approveSellerController = async (req:Request,res:Response)=>{
    try{
        const sellerDetails=req.body;
        const approvedSeller=await approveSellerService(sellerDetails);
        res.status(200).json({approvedSeller})
    }
    catch(err){
        res.status(500).json({message:"Failed to approve seller"})
    }
}