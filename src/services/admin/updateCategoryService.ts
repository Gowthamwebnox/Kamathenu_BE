import { PrismaClient } from "../../generated/prisma/client";


const prisma = new PrismaClient();
export const updateCategoryService=async(categoryData:any)=>{
    try{
        const category=await prisma.category.update({
            where:{
                id:categoryData.id
            },
            data:{
                name:categoryData.name,
                description:categoryData.description,
                image:categoryData.imageUrl,
            }
        })
        return category;
    }
    catch(err){
        throw new Error("Failed to update category");
    }
}