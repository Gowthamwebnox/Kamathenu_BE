import { Request, Response } from "express";
import { fetchSellerProductService } from "../../services/seller/fetchSellerProductService";

export const fetchSellerProduct = async (req: Request, res: Response):Promise<any> => {
    try {
        const { sellerId } = req.params;
        const sellerProduct = await fetchSellerProductService(sellerId);
        res.status(200).json(sellerProduct);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}