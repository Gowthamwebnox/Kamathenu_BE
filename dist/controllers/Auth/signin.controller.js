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
exports.Login = void 0;
const client_1 = require("../../generated/prisma/client");
const signinUser_1 = require("../../services/signinUser");
const crypto = require('crypto');
const { LoginUserData } = require('../../validation/Validations');
const prisma = new client_1.PrismaClient();
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientData = req.body;
        console.log(clientData);
        console.log(clientData + "????????????????CLIENT????????????????????????????");
        const loginUserData = LoginUserData(clientData);
        if (loginUserData.value) {
            const tokenAndUserData = yield (0, signinUser_1.signinUser)(clientData.email, clientData.password);
            console.log(tokenAndUserData + "tokenAndUserData");
            return res.status(200).json(tokenAndUserData);
        }
        if (!loginUserData.value) {
            return res.status(400).json(loginUserData.err);
        }
        console.log(clientData);
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
exports.Login = Login;
//# sourceMappingURL=signin.controller.js.map