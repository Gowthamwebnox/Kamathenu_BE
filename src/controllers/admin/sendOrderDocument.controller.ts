import { Request, Response } from "express";
import { sendOrderDocumentService } from "../../services/admin/sendOrderDocumentService";

export const sendOrderDocument=async(req:Request,res:Response)=>{
    try{
        const orderDocument=req.body;
        const userDocument= await sendOrderDocumentService(orderDocument);
        res.status(200).json({message:"Order document sent successfully",userDocument})
    }
    catch(err){
        res.status(500).json({message:"Failed to send order document"})
    }
}