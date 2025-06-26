import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient


export const getDesignAndFeatureService = async (clientData:any):Promise<any>=>{
    const {categoryType,limit}=clientData
    console.log(categoryType)
    console.log(limit)
    const designData=await prisma.product.findMany({
        where:{
            category:{
                name:categoryType
            }
        },
        take:limit,
        include:{
            category:true
        }
       
    })
    return designData
}