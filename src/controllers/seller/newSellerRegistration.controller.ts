

import { Request, Response } from "express";
import { newSellerRegistrationService } from "../../services/seller/newSellerRegistrationService";
export const newSellerRegistration = async (req: Request, res: Response) => {
  
    try{
        const sellerData = req.body;
        console.log(sellerData);
        const seller = await newSellerRegistrationService(sellerData);
        // res.status(201).json(seller);
        res.status(201).json({seller});

    }
    catch(error){
        console.log(error);
        res.status(500).json({message: "Internal server error"});
    }
};
