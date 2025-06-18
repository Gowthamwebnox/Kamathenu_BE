import { Request,  Response } from "express";
import bcrypt from 'bcrypt';
import Joi from "joi";
import { EmailTrigger } from "../services/sendEmail";
export const Registration = (req: Request, res: Response) => {
  console.log("created new registration");
  res.send("New User");
};

export const emailVerification =async (req: Request, res: Response):Promise<any> => {
  try{
    const clientData = req.body;
  console.log();
  const optEmailAndUserValidataion = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required(),
  });
    const saltHash=12
    //hashing the password
    const hashedPassword= await bcrypt.hash(clientData.passWord,saltHash)
    console.log(hashedPassword +">>>>>>>>>>>>>>>")
    // const userPassword= await bcrypt.compare(clientData.passWord,hashedPassword)
    // console.log(userPassword+"<<<<<<<<<<<<<<<<<<<<<<")
    

   const otp = Math.floor(100000 + Math.random() * 900000);
   
  const {error,value}=optEmailAndUserValidataion.validate(clientData)
  if(value){
    const dbResponse=await EmailTrigger(clientData.name,clientData.email,otp)
    const data={
      OTP:otp,
      response:dbResponse
    }
     return res.status(200).json(data)
  }
  if(error){
    return res.status(400).json(error)
  }
 
  }

  catch(err){
    return res.send(400).json(err)
  }
};
