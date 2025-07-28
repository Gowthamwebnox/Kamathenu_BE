import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient();
export const fetchSellerProductService = async (sellerId: string,debouncedSearchTerm:string):Promise<any> => {
    const whereClause:any={}
    if(debouncedSearchTerm || debouncedSearchTerm.trim()!==''){ 
        whereClause.OR=[
            {name:{contains:debouncedSearchTerm,mode:'insensitive'}}
        ]
    }
    const sellerProduct = await prisma.product.findMany({
        where: {
            sellerId: sellerId,
            ...whereClause
        },
        include:{
            images:true,
            discounts:true
        }
    });
    return sellerProduct;
}
