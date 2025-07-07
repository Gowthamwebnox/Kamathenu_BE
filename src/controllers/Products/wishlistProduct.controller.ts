import { Request, Response } from "express";
import { removeWishlist } from "../../services/Product/removeWishlist";
import { addWishlist } from "../../services/Product/addWishlist";

export const wishlistProduct = async (req: Request, res: Response): Promise<any> => {
    const { userId, wishlistProductId, productId, wishlistId } = req.body;
    console.log(req.body);
    console.log(userId, wishlistProductId, productId, wishlistId);
    
    
        const wishlist = await addWishlist(userId, productId);
        return res.status(200).json({
            message: "Product added to wishlist"
        });
    
}