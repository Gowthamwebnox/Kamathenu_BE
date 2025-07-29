import { Request, Response } from "express"
import { updateSellerBankDetailService } from "../../services/seller/updateSellerBankDetailService"


export const updateSellerBankDetails=async(req:Request,res:Response)=>{
    try{
        const bankDetails=req.body
        const sellerId=req.params.sellerId
        const updateSellerBankDetails=await updateSellerBankDetailService(bankDetails,sellerId)
        res.status(200).json({
            success:true,
            message:"Seller Bank Details Updated Successfully",
            data:updateSellerBankDetails
        })
    }
    catch{
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}