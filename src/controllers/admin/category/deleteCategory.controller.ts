import { Request, Response } from "express";
import { deleteCategoryService } from "../../../services/admin/deleteCategoryService";

export const deleteCategory=async(req:Request,res:Response)=>{
    try{
        const categoryId:any=req.params.categoryId;
        const category=await deleteCategoryService(categoryId);
        res.status(200).json({message:"Category deleted successfully",category})
    }
    catch(err){
        res.status(500).json({message:"Failed to delete category"})
    }
}