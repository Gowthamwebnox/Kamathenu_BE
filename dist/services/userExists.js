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
exports.default = ExistUserOrNot;
const client_1 = require("../generated/prisma/client");
const prisma = new client_1.PrismaClient();
function ExistUserOrNot(userEmail) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const email = userEmail;
            const dbResponse = yield prisma.user.findUnique({
                where: {
                    email: email
                }
            });
            return dbResponse;
            console.log(dbResponse + ">>>>>>>>>>>>>>>>>>>");
        }
        catch (err) {
            return err;
            console.log(err + "<<<<<<<<<<<<<<<");
        }
    });
}
//# sourceMappingURL=userExists.js.map