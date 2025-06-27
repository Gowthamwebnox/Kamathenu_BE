import { Request, Response } from "express";

import {  getCategoryService } from "../../services/Category/getCategoryService";

const getCategoryController = async (req: Request, res: Response): Promise<any> => {
  try {
    const client=req.body
    const categoryData: { [key: string]: any } = {}
    for(let i=0;i<client.length;i++){
      const category=client[i]
      const categoryName=category.categoryName
      const limit=category.limit
      const categories = await getCategoryService(categoryName,limit);
      categoryData[categoryName] = categories
    }
    // const categories = await getCategoryService();

    res.status(200).json({ message: "Category fetched successfully", data: categoryData });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch categories"});
  }
};

export default getCategoryController;