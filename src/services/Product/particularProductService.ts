import { PrismaClient } from "../../generated/prisma/client";
import { getDesignAndFeatureService } from "../Category/getDesignAndFeatureService";

const prisma = new PrismaClient();


export const particularProductService = async (clientData:any):Promise<any>=>{
    const {productId}=clientData
    const product:{particularProduct:any,similerProduct:any}={
      particularProduct:'',
      similerProduct:[],
    }
    console.log(productId)
    const fetchProduct = await prisma.product.findUnique({
        where: {
          id: productId,
        },
        include: {
          reviews: {
            include: {
              user: true, // optional: include user info for each review
            },
          },
          productDetails: true, // includes the ProductDetails records
        },
      });
      product.particularProduct=fetchProduct
      const fetchSimilerProduct = await getDesignAndFeatureService(clientData)
      product.similerProduct=fetchSimilerProduct

    return product
}