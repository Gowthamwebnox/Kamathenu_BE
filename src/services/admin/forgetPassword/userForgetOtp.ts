import { PrismaClient } from "../../../generated/prisma/client"
import { EmailTrigger } from "../../sendEmail"

const prisma=new PrismaClient()

export const userForgetOtp = async (email: string,otp:number) => {
    try{
        const userOTP=await prisma.oTPTable.update({
            where:{
                email:email
            },
            data:{
                OTP:otp,
            }
        })
        const emailTriggerData={
            email:email,
            otp:otp,
        }
        const emailTrigger= await EmailTrigger(emailTriggerData)
        return userOTP
    }
    catch{
        throw new Error("Internal Server Error")
    }
}



