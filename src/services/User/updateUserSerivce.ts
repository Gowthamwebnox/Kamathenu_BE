import { PrismaClient } from "../../generated/prisma/client"

const prisma= new PrismaClient()
export const updateUserService = async (userId:string,updateData:any):Promise<any> => {
    const user=await prisma.user.update({
        where:{
            id:userId
        },
        data:{
            firstName:updateData.firstName,
            lastName:updateData.lastName,
            email:updateData.email,
            number:updateData.phone,
        }
    })
    console.log(user);
    return user
}