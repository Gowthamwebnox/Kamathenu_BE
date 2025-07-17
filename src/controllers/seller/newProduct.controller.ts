import { Request, Response } from "express";
import { newProductService } from "../../services/seller/newProductService";


export const newProduct = async (req: Request, res: Response):Promise<any> => {
    const productData=req.body;
    console.log(productData);
    try {
        const product = await newProductService(productData);
        res.status(200).json({product});
    } catch (error) {
        res.status(500).json({message: "Error in creating product"});
    }
};