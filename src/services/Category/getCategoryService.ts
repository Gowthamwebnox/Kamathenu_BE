import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient
export const getCategoryService = async (categoryName:string,limit:number):Promise<any> => {
  
  
  // const results = await Promise.all(
  //   categoriesWithLimits.map(({ name, limit }) =>
  //     prisma.product.findMany({
  //       where: {
  //         category: {
  //           name,
  //         },
  //       },
  //       take: limit,
  //       include: {
  //         category: true,
  //         images: true,
  //       },
  //     })
  //   )
  // );
  const results=await prisma.product.findMany({
          where: {
            category: {
              name:categoryName,
            },
          },
          take: limit,
          include: {
            category: true,
            images: true,
            discounts: true,
          },
        })
    return results
};
