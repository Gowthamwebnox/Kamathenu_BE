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
exports.EmailTrigger = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const EmailTrigger = (emailTriggerData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(emailTriggerData);
    try {
        const transporter = nodemailer_1.default.createTransport({
            service: 'gmail',
            auth: {
                user: 'gowthamrwebnox@gmail.com',
                pass: 'fbvb jeuq uhqb stzu',
            }
        });
        if (emailTriggerData.otp !== undefined) {
            var mailOptions = {
                from: 'rgowthamraj5194@gmail.com',
                to: emailTriggerData.email,
                subject: 'Kamathenu Welcomes You!',
                text: `Hi ${emailTriggerData.name},Your OTP is: ${emailTriggerData.otp}`
            };
            const info = yield transporter.sendMail(mailOptions);
        }
        if (emailTriggerData.message !== undefined) {
            var mailMessage = {
                from: 'rgowthamraj5194@gmail.com',
                to: emailTriggerData.email,
                subject: `${emailTriggerData.subject} - ${emailTriggerData.name}`,
                text: `${emailTriggerData.message}`
            };
            const info = yield transporter.sendMail(mailMessage);
        }
        return "MailSendSuccessfully";
    }
    catch (err) {
        console.log(err);
    }
});
exports.EmailTrigger = EmailTrigger;
//# sourceMappingURL=sendEmail.js.map