import { PrismaClient } from "../../generated/prisma/client";
import { getDesignAndFeatureService } from "../Category/getDesignAndFeatureService";

const prisma = new PrismaClient();


export const particularProductService = async (clientData:any):Promise<any>=>{
    const {id,name,limit}=clientData
    const product:{particularProduct:any,similerProduct:any}={
      particularProduct:'',
      similerProduct:[],
    }
    console.log(id)
    const fetchProduct = await prisma.product.findUnique({
        where: {
          id: id,
        },
        include: {
          reviews: {
            include: {
              user: true, 
            },
          },
          productDetails: true, // includes the ProductDetails records
          images:true,
          category:true,
          discounts:true,
          seller:true,
        },
      });
      product.particularProduct=fetchProduct
      const fetchSimilerProduct = await getDesignAndFeatureService(clientData)
      product.similerProduct=fetchSimilerProduct

    return product
}