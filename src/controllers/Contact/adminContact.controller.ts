import { Request, Response } from "express";
import { EmailTrigger } from "../../services/sendEmail";
import { adminContactValidation } from "../../validation/Validations";
export const adminContact = async (req: Request, res: Response): Promise<any> => {
    const { name, email, message, subject } = req.body;
    const emailTriggerData = {
        name,
        email,
        message,
        subject
    }
    const validation:any=adminContactValidation(emailTriggerData)
    console.log(validation)
    if(validation.value===true){
        const seriveResponse = await EmailTrigger(emailTriggerData)
        return res.status(200).json({ message: "Email sent successfully" })
    }
    else{
        return res.status(400).json({ message: validation.err })
    }
    
}


