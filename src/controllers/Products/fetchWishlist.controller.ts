import { Request, Response } from "express";
import { fetchWishlistService } from "../../services/Product/fetchWishlist";

export const fetchWishlist = async (req: Request, res: Response):Promise<any> => {
    try {
        const {userId} = req.body;
        console.log(userId);
        const wishlist = await fetchWishlistService(userId);
        res.status(200).json({wishlist});
    } catch (error) {                                       
        res.status(500).json({ message: "Internal server error" });
    }
}