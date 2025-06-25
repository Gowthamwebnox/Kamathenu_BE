import { Request, Response } from "express";

import { getCategory } from "../../services/Category/getCategory";

const getCategoryController = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log("getCategory");
    const categories = await getCategory();
    res.status(200).json({ message: "Category fetched successfully", data: categories });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories"});
  }
};

export default getCategory;