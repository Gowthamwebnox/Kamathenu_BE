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
exports.fetchUser = void 0;
const fetchUserService_1 = require("../../services/User/fetchUserService");
const fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params;
    try {
        const user = yield (0, fetchUserService_1.fetchUserService)(userId.id);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(500).json({ message: "User not found" });
    }
});
exports.fetchUser = fetchUser;
//# sourceMappingURL=fetchUser.controller.js.map