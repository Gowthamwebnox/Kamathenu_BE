import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient
export const getCategory = async ():Promise<any> => {
  const categoriesWithLimits = [
    { name: "New Luxurious Villa Plans", limit: 1 },
    { name: "Compact Home Plans", limit: 2 },
    { name: "Appartment Plans", limit: 0 },
    { name: "Independent House Plans", limit: 2 },
    { name: "Residential Designes", limit: 3 },
    { name: "Commerical Plans", limit: 2 },
    { name: "Industrial Plans", limit: 1 },
  ];
  
  const results = await Promise.all(
    categoriesWithLimits.map(({ name, limit }) =>
      prisma.product.findMany({
        where: {
          category: {
            name,
          },
        },
        take: limit,
        include: {
          category: true,
        },
      })
    )
  );
  console.log(results)
  console.log("🔥🔥🔥🔥🔥🔥🔥🔥🔥")
    return results.flat()
};
