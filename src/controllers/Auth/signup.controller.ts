import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Joi from "joi";
import { log } from "console";
import { PrismaClient } from "../../generated/prisma/client";

const { UserData } = require("../../validation/Validations");
const { OTPCheck, NewUser } = require("../../services/signUp");
const prisma = new PrismaClient();

export const newUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const clientData = req.body;
    console.log(clientData );
    const clientDatas = {
      name: clientData.signupDetails.name,
      email: clientData.signupDetails.email,
      password: clientData.signupDetails.password,
      otp: Number(clientData.signupDetails.otp),
      firstname: clientData.signupDetails.firstname,
      lastname: clientData.signupDetails.lastname,
      number: Number(clientData.signupDetails.number),
    };
    console.log(clientDatas +"🔥🔥🔥🔥🔥🔥");
    //user data validation
    const userDataValidation = await UserData(clientDatas);
    console.log(userDataValidation.value +"Validation");
    return res.status(200).json(userDataValidation.value);
    //user data is true
    if (userDataValidation.value) {
      //otpchecking
      const otpChecking = await OTPCheck(clientData.id, clientDatas.otp);
      console.log(otpChecking+"OTPCHECKING")
      //otp checking is true
      if (otpChecking) {
        // creating user in userTable
        const emailVerified = otpChecking;
        //hashing the password
        const hashSalt = 12;
        const hashedPassword = await bcrypt.hash(
          clientData.signupDetails.password,
          hashSalt
        );
        const newUserData = {
          email: clientDatas.email,
          password: clientDatas.password,
          hasedPwd: hashedPassword,
          firstName: clientDatas.firstname,
          lastName: clientDatas.lastname,
          name: clientDatas.name,
          number:clientData.number,
          roleId: "USER",
          emailVerified:otpChecking
        };
        const createUser = await NewUser(newUserData);
      }
      if (!otpChecking) {
        return res.status(400).json("invalid OTP");
      }
    }
    //user data is fasle
    if (!userDataValidation.value) {
      return res.status(400).json(userDataValidation.err);
    }

    //validation
    // const newUser = Joi.object({
    //   name: Joi.string().min(3).max(30).required(),
    //   email: Joi.string().email().required(),
    //   password: Joi.string().min(8).max(30).required(),
    // });
    // const { error, value } = newUser.validate(clientData.signupDetails);
    // if (value) {
    //   const hashSalt = 12;
    //   const hashedPassword = await bcrypt.hash(
    //     clientData.signupDetails.password,
    //     hashSalt
    //   );
    //   const emailVerified = clientData.isEailValidation;

    //   const createNewUser = await prisma.user.create({
    //     data: {
    //       name: clientData.signupDetails.name,
    //       email: clientData.signupDetails.email,
    //       password: clientData.signupDetails.password, // Plain password (NOT RECOMMENDED to store plain text)
    //       hasedPassword: hashedPassword,
    //       roleId: "USER", // You need to provide this value
    //       isEmailVerified: clientData.isEmailValidation,
    //       emailVerifiedAt: clientData.isEmailValidation ? new Date() : null,
    //     },
    //   });
    //  return res.status(200).json("Created Successfully")
    // }
  } catch (err) {
    return res.status(400).json(err);
  }
};
