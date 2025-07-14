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
exports.googleSignin = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const signinUserWithGoogle_1 = require("../../services/signinUserWithGoogle");
const client_ID = process.env.CLIENT_ID || '';
const secretKey = process.env.SECRET_KEY || '';
console.log(client_ID + "client_ID");
console.log(secretKey + "secretKey");
const googleSignin = () => __awaiter(void 0, void 0, void 0, function* () {
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: client_ID,
        clientSecret: secretKey,
        callbackURL: "http://localhost:8000/api/auth/google/callback",
    }, (accessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(profile.emails[0].value + "email");
        const userData = yield (0, signinUserWithGoogle_1.signinUserWithGoogle)(profile.emails[0].value);
        console.log("🔥🔥🔥😎😎😎🔥🔥🔥");
        console.log(userData);
        const token = userData.token;
        console.log(token + "token");
        console.log(">>>>>>>>>>>>>>>>>>>>>>>profile<<<<<<<<<<<<<<<<<<<<<<<<<<");
        if (userData.isUser) {
            accessToken = token;
            return done(null, { userData, isNewUser: false, accessToken });
        }
        if (!userData.isUser) {
            return done(null, { userData, isNewUser: true });
        }
    })));
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser((user, done) => {
        done(null, user);
    });
});
exports.googleSignin = googleSignin;
//# sourceMappingURL=googlesignin.controller.js.map