import { PrismaClient } from "../../generated/prisma/client";
import { Request, Response } from "express";


const prisma =new PrismaClient
export const verifcationForgetUserOTP = async (req: Request, res: Response) => {
    const {email,otp}=req.body;
    const user=parseInt(otp)
    const userOTP=await prisma.oTPTable.findFirst({
        where:{
            email:email,
            OTP:user
        }
    })
    if(!userOTP){
        res.status(400).json({
            message: "Invalid OTP or email"
        })
    }
    res.status(200).json({
        message: "OTP verified successfully",
        userOTP
    })
}
