"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminContactValidation = void 0;
const joi_1 = __importDefault(require("joi"));
function EmailValidation(userValue) {
    try {
        console.log(userValue);
        const emailValidate = joi_1.default.object({
            name: joi_1.default.string().min(3).max(30).required(),
            email: joi_1.default.string().email().required(),
        });
        const { error, value } = emailValidate.validate(userValue);
        if (error) {
            return {
                value: false,
                err: error,
            };
        }
        else {
            return {
                value: true,
                mes: value,
            };
        }
    }
    catch (err) {
        console.log(err + "error in console");
    }
}
function UserData(userValue) {
    try {
        console.log(userValue);
        const signupSchema = joi_1.default.object({
            name: joi_1.default.string().min(3).max(30).required(),
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().min(6).max(100).required(),
            otp: joi_1.default.number().integer().min(100000).max(999999).required(),
            firstname: joi_1.default.string().min(1).max(50).required(),
            lastname: joi_1.default.string().min(1).max(50).required(),
            number: joi_1.default.number().required(),
        });
        const { error, value } = signupSchema.validate(userValue);
        if (error) {
            return {
                value: false,
                err: error,
            };
        }
        else {
            return {
                value: true,
                mes: value,
            };
        }
    }
    catch (err) {
        console.log(err + " error in console");
    }
}
function LoginUserData(userValue) {
    try {
        const loginSchema = joi_1.default.object({
            email: joi_1.default.string().email().required(),
            password: joi_1.default.string().min(6).max(100).required(),
        });
        const { error, value } = loginSchema.validate(userValue);
        if (error) {
            return {
                value: false,
                err: error,
            };
        }
        else {
            return {
                value: true,
                mes: value,
            };
        }
    }
    catch (err) {
        console.log(err + " error in console");
    }
}
const adminContactValidation = (userValue) => {
    try {
        const adminContactSchema = joi_1.default.object({
            name: joi_1.default.string().min(3).max(30).required(),
            email: joi_1.default.string().email().required(),
            message: joi_1.default.string().required(),
            subject: joi_1.default.string().required(),
        });
        const { error, value } = adminContactSchema.validate(userValue);
        if (error) {
            return {
                value: false,
                err: error,
            };
        }
        else {
            return {
                value: true,
                mes: value,
            };
        }
    }
    catch (err) {
        console.log(err + " error in console");
    }
};
exports.adminContactValidation = adminContactValidation;
module.exports = { EmailValidation, UserData, LoginUserData, adminContactValidation: exports.adminContactValidation };
//# sourceMappingURL=Validations.js.map