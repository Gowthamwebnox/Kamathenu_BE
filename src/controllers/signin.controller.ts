
import { Request, Response } from "express";
import Joi from "joi";
import { PrismaClient } from "../generated/prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { signinUser } from "../services/signinUser";
const crypto = require('crypto');
const { LoginUserData } = require('../validation/Validations');
const prisma = new PrismaClient();

export const Login=async(req:Request,res:Response):Promise<any>=>{
    try{
        const clientData=req.body
    const loginUserData=LoginUserData(clientData)
    
    if(loginUserData.value){
        const token=await signinUser(loginUserData.mes.email,loginUserData.mes.password)
        console.log(token+"token")
        return res.status(200).json(token)
    }
    if(!loginUserData.value){
        return res.status(400).json(loginUserData.err)
    }
    console.log(clientData)
    }
    catch(err){
        return res.status(400).json(err)
    }
}