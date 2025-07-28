import { Request, Response } from "express";
import { fetchSellerProfileService } from "../../../services/admin/fetchSellerProfileService";


export const fetchSellerProfile = async (req: Request, res: Response) => {
    try {
        const {search,limit,offset,isApproved} = req.query;
            const parsedSearch = search as string || '';
        const parsedLimit = parseInt(limit as string) || 10;
        const parsedOffset = parseInt(offset as string) || 0;
        const parsedIsApproved = isApproved === 'true' ? 'Approved' : 
                                isApproved === 'false' ? 'Pending' : 
                                'Approved';
        const sellerProfile = await fetchSellerProfileService(parsedSearch,parsedLimit,parsedOffset,parsedIsApproved);
        res.status(200).json(sellerProfile);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch seller profile", error: error instanceof Error ? error.message : error });
    }
}
