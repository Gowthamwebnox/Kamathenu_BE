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
exports.signinUser = void 0;
const client_1 = require("../generated/prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const signinUser = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var token = '';
        console.log(email + "email");
        const findUser = yield prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (!findUser) {
            return 'User Not Found';
        }
        console.log(findUser);
        const hashedPassword = findUser === null || findUser === void 0 ? void 0 : findUser.hasedPassword;
        const passwordCheck = yield bcrypt_1.default.compare(password, hashedPassword);
        const secretKey = process.env.TOKEN_SECRET_KEY || '';
        // console.log(secretKey)
        if (passwordCheck) {
            console.log("?????????????????????PASSWORD CHECKED?????????????????????");
            token = jsonwebtoken_1.default.sign(email, secretKey);
            console.log(token + "????????????????  Your Token ??????????????");
            return { Token: token, user: findUser };
        }
        if (!passwordCheck) {
            console.log("?????????????????????PASSWORD NOT CHECKED?????????????????????");
            return "Password is incorrect";
        }
        console.log(passwordCheck + ">>>>>>>>>>>>>>");
    }
    catch (err) {
        console.log(err);
    }
});
exports.signinUser = signinUser;
//# sourceMappingURL=signinUser.js.map