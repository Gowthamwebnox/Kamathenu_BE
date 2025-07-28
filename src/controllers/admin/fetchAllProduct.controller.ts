import { Request, Response } from "express";
import { fetchAllProductService } from "../../services/admin/fetchAllProductService";

export const fetchAllProduct = async (req: Request, res: Response) => {
    try {
        const { userId,search, limit, offset, sellerType, isApproved } = req.query;
        console.log({ search, limit, offset, sellerType, isApproved });
        
        // Parse and convert parameters to correct types
        const parsedLimit = parseInt(limit as string) || 10;
        const parsedOffset = parseInt(offset as string) || 0;
        const parsedSearch = search as string || undefined;
        const parsedSellerType = sellerType as string || undefined;
        const parsedIsApproved = isApproved === 'true' ? true : 
                                isApproved === 'false' ? false : 
                                true;
        const parsedUserId = userId as string || undefined;
        const products = await fetchAllProductService(parsedLimit, parsedOffset, parsedSearch, parsedSellerType, parsedIsApproved,parsedUserId);
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
    }
};