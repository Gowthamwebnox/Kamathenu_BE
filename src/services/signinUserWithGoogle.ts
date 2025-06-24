import { PrismaClient } from "../generated/prisma/client";
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const signinUserWithGoogle = async (email: string) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        if(!user){
            return {isUser:false}
        }
        if(user){
            const secretKey=process.env.TOKEN_SECRET_KEY || ''
            const token=jwt.sign(email,secretKey)
            return {user:user,token:token,isUser:true}
        }
        
    }
    catch(err){
        console.log(err)
        return err
    }
    
}
