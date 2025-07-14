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
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
function OTPCheck(id, otp) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbResponseOTP = yield prisma.oTPTable.findUnique({
                where: {
                    id: id,
                },
            });
            console.log(dbResponseOTP);
            if ((dbResponseOTP === null || dbResponseOTP === void 0 ? void 0 : dbResponseOTP.OTP) === otp) {
                const updateOTPData = yield prisma.oTPTable.update({
                    where: {
                        id: id,
                    },
                    data: {
                        isUsed: true,
                    },
                });
                //   console.log(updateOTPData.isUsed)
                return updateOTPData.isUsed;
            }
        }
        catch (err) {
            return err;
        }
    });
}
function NewUser(userData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log(userData);
            const dbResponseNewUser = yield prisma.user.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    hasedPassword: userData.hasedPwd,
                    roleId: userData.roleId,
                    isEmailVerified: userData.emailVerified,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    number: userData.number,
                },
            });
            console.log(dbResponseNewUser + ">>>>>>>>>>>>>>>>>>> 🔥USER CREATED🔥 <<<<<<<<<<<<<<<<<<<<<<<<");
            return dbResponseNewUser;
        }
        catch (error) {
            console.error("Prisma error: ", error);
            throw error;
        }
    });
}
module.exports = { OTPCheck, NewUser };
//# sourceMappingURL=signUp.js.map