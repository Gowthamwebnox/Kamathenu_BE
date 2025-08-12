import { PrismaClient } from "../../generated/prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();
    export const updatePassword = async (req: Request, res: Response):Promise<string | any> => {
    const userData = req.body;
    console.log(userData+"USERDATA")
    const hashSalt=12;
    const hashedPassword=await bcrypt.hash(userData.password, hashSalt);
    const user=await prisma.user.update({
        where:{
            email:userData.email
        },
        data:{
            hasedPassword:hashedPassword,
            password:userData.password
        }
    })
    return res.status(200).json({
        message: "Password updated successfully"
    })
}