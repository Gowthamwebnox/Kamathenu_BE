import { PrismaClient } from "../../generated/prisma/client";


const prisma = new PrismaClient();
export const fetchCategoryService = async ():Promise<any> => {
    try {
        const categories = await prisma.category.findMany();
        return categories;
    } catch (error) {
        return "Error in fetching categories";
    }
};
