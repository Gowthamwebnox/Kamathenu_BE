import { Request, Response } from "express";
import { fetchAllProductService } from "../../services/admin/fetchAllProductService";

export const fetchAllProduct = async (req: Request, res: Response) => {
   
   const products=await fetchAllProductService();
   res.status(200).json(products);
}