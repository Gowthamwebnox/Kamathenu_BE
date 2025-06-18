import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Joi from "joi";
import { log } from "console";
import { PrismaClient } from "../../prisma/src/generated/prisma";
const prisma = new PrismaClient();


export const newUser = async (req: Request, res: Response):Promise<any> => {
 try{
     const clientData = req.body;
  console.log(clientData);
  //validation
  const newUser = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
  });
  const { error, value } = newUser.validate(clientData.signupDetails);
  if (value) {
    const hashSalt = 12;
    const hashedPassword = await bcrypt.hash(
      clientData.signupDetails.password,
      hashSalt
    );
    const emailVerified = clientData.isEailValidation;

    const createNewUser = await prisma.user.create({
      data: {
        name: clientData.signupDetails.name,
        email: clientData.signupDetails.email,
        password: clientData.signupDetails.password, // Plain password (NOT RECOMMENDED to store plain text)
        hasedPassword: hashedPassword,
        roleId: "USER", // You need to provide this value
        isEmailVerified: clientData.isEmailValidation,
        emailVerifiedAt: clientData.isEmailValidation ? new Date() : null,
      },
    });
   return res.status(200).json("Created Successfully")
  }
 }
 catch(err){
    return res.status(400).json(err)
 }
};
