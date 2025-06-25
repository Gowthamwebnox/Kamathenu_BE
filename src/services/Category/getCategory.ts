import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient
export const getCategory = async () => {
    const products = await prisma.product.findMany({
        where: {
          category: {
            name: {
                in:["New Luxurious Villa Plans","Compact Home Plans","Appartment Plans","Independent House Plans","Residential Designes","Commerical Plans","Industrial Plans"]
            }
          },
        },
        include: {
          category: true,
        },
      });
    console.log(products)
};
