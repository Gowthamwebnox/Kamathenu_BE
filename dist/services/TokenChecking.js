"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenChecking = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const TokenChecking = (req, res) => {
    const token = req.body.Token;
    console.log(token + " TOKEN");
    try {
        if (token === null) {
            return res.send({
                status: 401,
                message: "User is not authenticated",
                isUser: false
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET_KEY || '');
        if (decoded) {
            console.log("?????????????????????TOKEN CHECKED?????????????????????");
            return res.status(200).json({ message: 'User is authenticated', isUser: true });
        }
    }
    catch (err) {
        console.error("JWT verification failed:", err);
        return res.status(401).json({ message: 'Invalid token', isUser: false });
    }
};
exports.TokenChecking = TokenChecking;
//# sourceMappingURL=TokenChecking.js.map