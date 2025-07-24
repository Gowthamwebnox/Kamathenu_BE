import { Request, Response } from "express";
import { newCategoryService } from "../../../services/admin/newCategoryService";

export const newCategory=async(req:Request,res:Response)=>{
    try{
        const categoryData=req.body;
        const category=await newCategoryService(categoryData);
        res.status(200).json({message:"Category created successfully",category})
    }
    catch(err){
        res.status(500).json({message:"Failed to create category"})
    }
}