
import { PrismaClient } from "../generated/prisma/client";
const prisma=new PrismaClient()

export default async function ExistUserOrNot(userEmail:string){
    try{const email=userEmail
    const dbResponse=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    return dbResponse
    console.log(dbResponse +">>>>>>>>>>>>>>>>>>>")}
    catch(err){
        return err
        console.log(err+"<<<<<<<<<<<<<<<" )
    }
}