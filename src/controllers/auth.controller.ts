import { Request,  Response } from "express";
import { EmailTrigger } from "../services/sendEmail";
const { EmailValidation } = require('../validation/Validations');
import ExistUserOrNot from "../services/userExists";
import NewUserRegisterOTP from "../services/NewUserOTP";


export const emailVerification =async (req: Request, res: Response):Promise<any> => {
  try{
    const clientData = req.body;
    const userEmail={
      email:clientData.email
    }
  console.log();
  // email validation
  const optEmailAndUserValidataion = await EmailValidation(clientData)

  console.log(optEmailAndUserValidataion?.mes.email +">>>>>>>>>>>>>>>>>>>>>>>>>Valiadation<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

 if(optEmailAndUserValidataion?.value){
  //existing user or not
    const userAllReadyExist= await ExistUserOrNot(optEmailAndUserValidataion.mes.email)
  console.log(userAllReadyExist)

  //New user
  if(userAllReadyExist===null){
    const otp = Math.floor(100000 + Math.random() * 900000);
    //Sending OTP 
    const seriveResponse= await EmailTrigger(clientData.name,clientData.email,otp)
    if(seriveResponse=='MailSendSuccessfully')
      {
      console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>new<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,")
    const otpRegisterValue:any={
      email:clientData.email,
      otp:otp,
      Isused:false
    }
    //storing new user OTP in OTPTable
    const serviceNewUserRegisterOTP=await NewUserRegisterOTP(otpRegisterValue)
    console.log(serviceNewUserRegisterOTP)
    return res.status(200).json(serviceNewUserRegisterOTP)
    
    }
  }
  //if already created
  if(userAllReadyExist!==null){
    console.log("used all ready created")
    res.status(400).json("User All Ready Created")
  }
}
//error in validation
if(!optEmailAndUserValidataion?.value){
  return res.status(500).json(optEmailAndUserValidataion?.err)
}

    // const saltHash=12
    //hashing the password
    // const hashedPassword= await bcrypt.hash(clientData.passWord,saltHash)
    // console.log(hashedPassword +">>>>>>>>>>>>>>>")
    // const userPassword= await bcrypt.compare(clientData.passWord,hashedPassword)
    // console.log(userPassword+"<<<<<<<<<<<<<<<<<<<<<<")
    

   
   
  // const {error,value}=optEmailAndUserValidataion.validate(clientData)
  // if(false){
  //   const dbResponse=await EmailTrigger(clientData.name,clientData.email,otp)
  //   const data={
  //     OTP:otp,
  //     response:dbResponse
  //   }
  //    return res.status(200).json(data)
  // }
  // if(false){
  //   return res.status(400).json("error")
  // }
 
  }

  catch(err){
    return res.send(400).json(err)
  }
};
