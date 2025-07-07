import { Request, Response } from "express";
import { removeWishlist } from "../../services/Product/removeWishlist";

export const wishlistRemove = async (req: Request, res: Response): Promise<any> => {
    const { userId, wishlistProductId, productId, wishlistId } = req.body;
    try {
        const wishlist = await removeWishlist(userId, productId);
        return res.status(200).json({
            message: wishlist
        });
    } catch (error) {
        return res.status(404).json({
            message: error instanceof Error ? error.message : "Wishlist item not found"
        });
    }
    
    
}