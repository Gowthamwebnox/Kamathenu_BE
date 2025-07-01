import { Request, Response } from "express";
import { displayUserCart } from "../../services/Cart/displayUserCart";

export const cartPage = async (req: Request, res: Response): Promise<any> => {
    const { userId } = req.body;
    const cart = await displayUserCart(userId);
    return res.status(200).json({cart })
}       