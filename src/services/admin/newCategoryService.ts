import { PrismaClient } from "../../generated/prisma/client";

const prisma =new PrismaClient();

export const newCategoryService=async(categoryData:any)=>{
    try{
        
        const category= await prisma.category.create({
            data:{
                name:categoryData.name,
                description:categoryData.description,
                image:categoryData.imageUrl,
            }
        })
        console.log(category);
        return category;
    }
    catch(err){
        throw new Error("Failed to create category");
    }
}