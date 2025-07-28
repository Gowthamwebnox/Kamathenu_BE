import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const fetchAllProductService = async (limit: number, offset: number, search?: string, sellerType?: string,isApproved?: boolean,userId?: string) => {
    // Build the where clause conditionally
    const whereClause: any = {};
    
    // Add search condition if search is provided
    if (search && search.trim() !== '') {
        whereClause.OR = [
            { name: { contains: search, mode: 'insensitive' } },
            { description: { contains: search, mode: 'insensitive' } }
        ];
    }
    
    // Add sellerType condition if provided
    if (sellerType === 'inHouse') {
        // Assuming inHouse sellers are those with roleId "SELLER" and approved status
        whereClause.sellerId = userId;
    } else if (sellerType === 'external') {
        // External sellers might be those with different criteria
        whereClause.sellerId = {
            not: userId
        };
    }
    
    console.log("Where clause:", JSON.stringify(whereClause, null, 2));
    
    const products = await prisma.product.findMany({
        where: {
            isApproved: isApproved,
           ...whereClause
        },
       
        
        take: limit,
        skip: offset,
        
        include: {
            category: true,
            seller: {
                include: {
                    user: true
                }
            },
            images: true,
            reviews: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    console.log(products);
    return products;
};
