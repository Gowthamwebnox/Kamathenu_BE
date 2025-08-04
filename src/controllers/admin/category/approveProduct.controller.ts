import { Request, Response } from "express";
import { approveProductService } from "../../../services/admin/approveProductService";

export const approveProduct = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;  
        const {isApproved} = req.body;
        const product = await approveProductService(id,isApproved);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error approving product" });
    }
}   

