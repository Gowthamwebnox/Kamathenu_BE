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
const fetchUserService_1 = require("../../services/admin/fetchUserService");
const fetchUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { limit, offset, search, isEmailVerified } = req.query;
        console.log(limit, offset, search, isEmailVerified);
        // Parse and convert parameters to correct types
        const parsedLimit = parseInt(limit) || 10;
        const parsedOffset = parseInt(offset) || 0;
        const parsedSearch = search || undefined;
        const parsedIsEmailVerified = isEmailVerified === 'true' ? true :
            isEmailVerified === 'false' ? false :
                undefined;
        const users = yield (0, fetchUserService_1.fetchUserService)(parsedLimit, parsedOffset, parsedSearch, parsedIsEmailVerified);
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch users" });
    }
});
exports.fetchUser = fetchUser;
//# sourceMappingURL=fetchUser.controller.js.map