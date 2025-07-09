import { PrismaClient } from "../../generated/prisma/client";



const prisma=new PrismaClient()
export const fetchUserService = async (userId:string):Promise<any> => {
        const user= await prisma.user.findUnique({
            where:{
                id:userId
            }
        }) 
        return user
};