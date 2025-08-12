
import { Request, Response } from "express";
import { userForgetOtp } from "../../services/admin/forgetPassword/userForgetOtp";
export const forgetPassword = async (req: Request, res: Response):Promise<string | any> => {
    const { email } = req.body;
    const userForgetOTP=Math.floor(100000 + Math.random() * 900000);
    try{
    const userOTP=await userForgetOtp(email,userForgetOTP)
    
    res.status(200).json({
        message:"OTP sent successfully",
        userOTP
    })
    }
    catch(error){
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
   
}