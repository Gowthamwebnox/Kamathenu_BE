import { PrismaClient } from "../generated/prisma/client";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getCategory } from "./Category/getCategory";
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
    
    const secretKey=process.env.TOKEN_SECRET_KEY || ''
    // console.log(secretKey)

    if(passwordCheck){
        console.log("?????????????????????PASSWORD CHECKED?????????????????????")
        token=jwt.sign(email,secretKey)
        const userData=await getCategory()
        console.log(token+"????????????????  Your Token ??????????????")
        console.log(userData + "userData🔥🔥🔥🔥")
        return {Token:token,user:findUser,userDataCategory:userData};
    }
    if(!passwordCheck){
        console.log("?????????????????????PASSWORD NOT CHECKED?????????????????????")
        return "Password is incorrect"
    }
    console.log(passwordCheck +">>>>>>>>>>>>>>")
    }
    catch(err){
        console.log(err)
    }
}
