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
exports.emailVerification = void 0;
const sendEmail_1 = require("../../services/sendEmail");
const { EmailValidation } = require('../../validation/Validations');
const userExists_1 = __importDefault(require("../../services/userExists"));
const NewUserOTP_1 = __importDefault(require("../../services/NewUserOTP"));
const emailVerification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientData = req.body;
        const userEmail = {
            email: clientData.email
        };
        // email validation
        const optEmailAndUserValidataion = yield EmailValidation(clientData);
        if (optEmailAndUserValidataion === null || optEmailAndUserValidataion === void 0 ? void 0 : optEmailAndUserValidataion.value) {
            //existing user or not
            const userAllReadyExist = yield (0, userExists_1.default)(optEmailAndUserValidataion.mes.email);
            //New user
            if (userAllReadyExist === null) {
                const otp = Math.floor(100000 + Math.random() * 900000);
                //Sending OTP 
                const emailTriggerData = {
                    name: clientData.name,
                    email: clientData.email,
                    otp: otp
                };
                const seriveResponse = yield (0, sendEmail_1.EmailTrigger)(emailTriggerData);
                if (seriveResponse == 'MailSendSuccessfully') {
                    const otpRegisterValue = {
                        email: clientData.email,
                        otp: otp,
                        Isused: false
                    };
                    //storing new user OTP in OTPTable
                    const serviceNewUserRegisterOTP = yield (0, NewUserOTP_1.default)(otpRegisterValue);
                    return res.status(200).json(serviceNewUserRegisterOTP);
                }
            }
            //if already created
            if (userAllReadyExist !== null) {
                res.status(400).json("User All Ready Created");
            }
        }
        //error in validation
        if (!(optEmailAndUserValidataion === null || optEmailAndUserValidataion === void 0 ? void 0 : optEmailAndUserValidataion.value)) {
            return res.status(500).json(optEmailAndUserValidataion === null || optEmailAndUserValidataion === void 0 ? void 0 : optEmailAndUserValidataion.err);
        }
    }
    catch (err) {
        return res.send(400).json(err);
    }
});
exports.emailVerification = emailVerification;
//# sourceMappingURL=auth.controller.js.map