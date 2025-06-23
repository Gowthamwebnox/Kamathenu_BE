import { PrismaClient } from "../generated/prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const prisma = new PrismaClient();

export const signinUser = async (email: string, password: string) => {
    try{
        var token = '';
    
    console.log(email+"email")
    const findUser=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(!findUser){
        return 'User Not Found'
    }
    console.log(findUser)
    const hashedPassword=findUser?.hasedPassword
    const passwordCheck=await bcrypt.compare(password,hashedPassword)
    
    const secretKey=process.env.HASH_SECRET_KEY || ''
    // console.log(secretKey)

    if(passwordCheck){
        token=jwt.sign(email,secretKey)
        console.log(token+"????????????????  Your Token ??????????????")
        return token;
    }
    console.log(passwordCheck +">>>>>>>>>>>>>>")
    }
    catch(err){
        console.log(err)
    }
}