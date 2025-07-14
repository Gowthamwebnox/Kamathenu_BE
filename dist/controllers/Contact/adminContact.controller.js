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
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminContact = void 0;
const sendEmail_1 = require("../../services/sendEmail");
const Validations_1 = require("../../validation/Validations");
const adminContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, message, subject } = req.body;
    const emailTriggerData = {
        name,
        email,
        message,
        subject
    };
    const validation = (0, Validations_1.adminContactValidation)(emailTriggerData);
    console.log(validation);
    if (validation.value === true) {
        const seriveResponse = yield (0, sendEmail_1.EmailTrigger)(emailTriggerData);
        return res.status(200).json({ message: "Email sent successfully" });
    }
    else {
        return res.status(400).json({ message: validation.err });
    }
});
exports.adminContact = adminContact;
//# sourceMappingURL=adminContact.controller.js.map