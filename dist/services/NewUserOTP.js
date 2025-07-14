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
exports.default = NewUserRegisterOTP;
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
function NewUserRegisterOTP(newUser) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(newUser + "newqasdfadsf");
            const dbResponse = yield prisma.oTPTable.create({
                data: {
                    email: newUser.email,
                    OTP: newUser.otp,
                    isUsed: newUser.Isused
                },
            });
            return dbResponse.id;
        }
        catch (err) {
            return err;
        }
    });
}
//# sourceMappingURL=NewUserOTP.js.map