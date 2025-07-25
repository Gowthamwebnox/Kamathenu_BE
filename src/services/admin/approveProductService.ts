import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();

export const approveProductService = async (id: string,isApproved:boolean) => {
    try {
        if(isApproved){
            const product = await prisma.product.update({
            where:{
                id:id
            },
            data:{
                isApproved:true
            }
        })
        return product;
    }else{
        const product = await prisma.product.update({
            where:{
                id:id
            },
            data:{
                isApproved:false
            }
        })
        return product;
    }
    } catch (error) {
        throw new Error("Error approving product");
    }
}   