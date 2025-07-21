import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const fetchSellerProfileService = async ():Promise<any> => {
    const sellerProfile = await prisma.sellerProfile.findMany()
    return sellerProfile;
}