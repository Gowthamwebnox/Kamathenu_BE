import { Request, Response } from "express";
import { fetchCategoryService } from "../../services/seller/fetchCategoryService";


export const fetchCategory = async (req: Request, res: Response):Promise<any> => {
    try {
        const categories = await fetchCategoryService();
        res.status(200).json({categories});
    } catch (error) {
        res.status(500).json({message: "Error in fetching categories"});
    }
};
