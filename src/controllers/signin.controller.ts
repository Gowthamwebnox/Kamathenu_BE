
import { Request, Response } from "express";
import Joi from "joi";
import { PrismaClient } from "../../prisma/src/generated/prisma";
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

export const Login=async(req:Request,res:Response):Promise<any>=>{
    const clientData=req.body
    const loginUser=Joi.object({
         email: Joi.string().email().required(),
        password: Joi.string().min(8).max(30).required()
    })
    const {error, value}=loginUser.validate(clientData)
    if(error){
        return res.send(500).json(error)
    }
    if(value){
        const findUser=await prisma.user.findUnique({
            where:{
                email:clientData.email
            }
        })
        if(!findUser){
            return res.send(401).json("User Not Found")
        }

        const hashedPassword=findUser?.hasedPassword
        const passwordCheck=await bcrypt.compare(clientData.password,hashedPassword)
        console.log(passwordCheck +">>>>>>>>>>>>>>")
    }
    console.log(clientData)
}