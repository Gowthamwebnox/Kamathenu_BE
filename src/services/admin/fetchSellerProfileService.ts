import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const fetchSellerProfileService = async (search:string,limit:number,offset:number,isApproved:string):Promise<any> => {
    console.log(search,limit,offset,isApproved);
    const sellerProfile = await prisma.sellerProfile.findMany({
                    where: {
                        OR: [
                            { sellerName: { contains: search, mode: 'insensitive' } },
                            { storeName: { contains: search, mode: 'insensitive' } }
                        ],
                        status: isApproved
                    },
                    skip: offset,
                    take: limit,
                    orderBy: {
                        createdAt: 'desc'
                    }
                })
    return sellerProfile;
}