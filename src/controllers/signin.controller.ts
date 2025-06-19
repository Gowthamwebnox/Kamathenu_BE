
import { Request, Response } from "express";
import Joi from "joi";
import { PrismaClient } from "../../prisma/src/generated/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const crypto = require('crypto');
const prisma = new PrismaClient();

export const Login=async(req:Request,res:Response):Promise<any>=>{
    try{
        const clientData=req.body
    var token='';
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
        
        const secretKey='0ab35d420f6511c368509e1e90dbf1fd9fa784396bb11703ea655d7dbffd87f17c3ecefe0da96516b34a2b12a980d48c788d861a6a2d4602b42a306ebebaeda2'
        // console.log(secretKey)

        if(passwordCheck){
            token=jwt.sign(clientData.email,secretKey)
            console.log(token+"????????????????  Your Token ??????????????")
            return res.status(200).json(token);
        }
        console.log(passwordCheck +">>>>>>>>>>>>>>")
    }
    console.log(clientData)
    }
    catch(err){
        return res.status(400).json(err)
    }
}