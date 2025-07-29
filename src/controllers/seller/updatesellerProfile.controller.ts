import { Request, Response } from "express"
import { updateSellerProfileService } from "../../services/seller/updateSellerProfileService";

export const updateSellerProfile=async(req:Request,res:Response)=>{

    try{
        const sellerProfile=req.body
        const sellerId=req.params.sellerId;
        console.log(sellerProfile,sellerId)
        const updateSellerProfile=await updateSellerProfileService(sellerProfile,sellerId)
        res.status(200).json({
            success:true,
            message:"Seller Profile Updated Successfully",
            data:updateSellerProfile
        })

    }
    catch{
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}