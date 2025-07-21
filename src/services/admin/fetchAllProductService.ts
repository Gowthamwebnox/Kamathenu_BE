import { PrismaClient } from "../../generated/prisma/client";


const prisma=new PrismaClient();

export const fetchAllProductService = async () => {
        const products=await prisma.product.findMany({
            // where:{
            //     sellerId:{
            //         not:'8bba6fb2-8af9-4e7e-9e26-5b0aef8f589c'
            //     }
            // },
            include:{
                category:true,
                seller:true,
                images:true,
                reviews:true,
            }
        })
        return products;
}
