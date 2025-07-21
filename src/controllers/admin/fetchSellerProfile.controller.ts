import { Request, Response } from "express";
import { fetchSellerProfileService } from "../../services/admin/fetchSellerProfileService";


export const fetchSellerProfile = async (req: Request, res: Response) => {
    try {
        const sellerProfile = await fetchSellerProfileService();
        res.status(200).json(sellerProfile);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch seller profile", error: error instanceof Error ? error.message : error });
    }
}
