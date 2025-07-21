import { Request, Response } from "express";
import { fetchSellerService } from "../../services/admin/fetchSellerService";

export const getSeller = async (req: Request, res: Response) => {
    const userId=req.params.userId;
    console.log(userId)
    const sellers = await fetchSellerService(userId);
    res.status(200).json(sellers);
}