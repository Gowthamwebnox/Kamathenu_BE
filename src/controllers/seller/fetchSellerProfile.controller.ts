import { Request, Response } from "express";
import { fetchSellerProfileService } from "../../services/seller/fetchSellerProfileService";

export const fetchSellerProfile = async (req:Request,res:Response):Promise<any>=>{
    try {
        const {sellerId}=req.params;
        console.log(sellerId);
        const sellerProfile=await fetchSellerProfileService(sellerId);
        res.status(200).json(sellerProfile);
    } catch (error) {
        res.status(500).json({message:"Internal server error"});
    }
}