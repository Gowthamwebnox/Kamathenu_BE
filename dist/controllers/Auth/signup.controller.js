"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const client_1 = require("../../generated/prisma/client");
const { UserData } = require("../../validation/Validations");
const { OTPCheck, NewUser } = require("../../services/signUp");
const prisma = new client_1.PrismaClient();
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientData = req.body;
        console.log(clientData);
        const clientDatas = {
            name: clientData.signupDetails.name,
            email: clientData.signupDetails.email,
            password: clientData.signupDetails.password,
            otp: Number(clientData.signupDetails.otp),
            firstname: clientData.signupDetails.firstname,
            lastname: clientData.signupDetails.lastname,
            number: Number(clientData.signupDetails.number),
        };
        console.log(clientDatas + "🔥🔥🔥🔥🔥🔥");
        //user data validation
        const userDataValidation = yield UserData(clientDatas);
        console.log(userDataValidation.value + "Validation");
        //user data is true
        if (userDataValidation.value) {
            //otpchecking
            const otpChecking = yield OTPCheck(clientData.id, clientDatas.otp);
            console.log(otpChecking + "OTPCHECKING");
            //otp checking is true
            if (otpChecking) {
                // creating user in userTable
                const emailVerified = otpChecking;
                //hashing the password
                const hashSalt = 12;
                const hashedPassword = yield bcrypt_1.default.hash(clientData.signupDetails.password, hashSalt);
                const newUserData = {
                    email: clientDatas.email,
                    password: clientDatas.password,
                    hasedPwd: hashedPassword,
                    firstName: clientDatas.firstname,
                    lastName: clientDatas.lastname,
                    name: clientDatas.name,
                    number: clientData.number,
                    roleId: "USER",
                    emailVerified: otpChecking
                };
                const createUser = yield NewUser(newUserData);
                return res.status(200).json("user created successfully");
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
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
exports.newUser = newUser;
//# sourceMappingURL=signup.controller.js.map