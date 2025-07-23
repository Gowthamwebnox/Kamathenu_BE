import { Request, Response } from "express";
import { updateCategoryService } from "../../services/admin/updateCategoryService";

export const updateCategory=async(req:Request,res:Response)=>{
    try{
        const categoryData=req.body;
        const category=await updateCategoryService(categoryData);
        res.status(200).json({message:"Category updated successfully",category})
    }   
    catch(err){
        res.status(500).json({message:"Failed to update category"})
    }
}