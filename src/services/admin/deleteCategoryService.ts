import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const deleteCategoryService=async(categoryId:string)=>{
    try{
        const category=await prisma.category.delete({
            where:{
                id:categoryId
            }
        })
        return category;
    }
    catch(err){
        throw new Error("Failed to delete category");
    }
}