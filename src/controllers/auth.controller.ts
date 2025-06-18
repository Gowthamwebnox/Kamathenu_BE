import { Request, Response } from "express";
import Joi from "joi";
import { EmailTrigger } from "../services/sendEmail";
export const Registration = (req: Request, res: Response) => {
  console.log("created new registration");
  res.send("New User");
};

export const emailVerification = (req: Request, res: Response) => {
  const clientData = req.body;
  console.log();
  const optEmailAndUserValidataion = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
  });

   const otp = Math.floor(100000 + Math.random() * 900000);
   
  const {error,value}=optEmailAndUserValidataion.validate(clientData)
  if(value){
    const dbResponse= EmailTrigger(clientData.name,clientData.email,otp)
    
  }
  return res.send(200)
  if(error){
   console.log(error)
  }

};
