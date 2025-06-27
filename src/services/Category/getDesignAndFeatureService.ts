import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient


export const getDesignAndFeatureService = async (clientData: any): Promise<any> => {
    const { categoryName, limit } = clientData
    const designData = await prisma.product.findMany({
        where: {
            category: {
                name: categoryName,
            },
        },
        take: limit,
        include: {
            category: true,
            images: true,
            discounts: true,
        },
    })
    return designData
}