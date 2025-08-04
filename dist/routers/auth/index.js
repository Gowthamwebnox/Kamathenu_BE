"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const passport_1 = __importDefault(require("passport"));
const auth_controller_1 = require("../../controllers/Auth/auth.controller");
const googlesignin_controller_1 = require("../../controllers/Auth/googlesignin.controller");
const signup_controller_1 = require("../../controllers/Auth/signup.controller");
const signin_controller_1 = require("../../controllers/Auth/signin.controller");
const fetchUser_controller_1 = require("../../controllers/User/fetchUser.controller");
const updateUser_controller_1 = require("../../controllers/User/updateUser.controller");
const User_1 = require("../../controllers/User");
const router = express_1.default.Router();
// Google OAuth
(0, googlesignin_controller_1.googleSignin)();
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// const client_ID = process.env.CLIENT_ID || '';
// const secretKey = process.env.SECRET_KEY || '';
// console.log(client_ID + "client_ID")
// console.log(secretKey + "secretKey")
// passport.use(
// new GoogleStrategy(
//   {
//     clientID: client_ID,
//     clientSecret: secretKey,
//     callbackURL: "http://localhost:8000/api/auth/google/callback",
//   },
//   (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) => {
//     console.log(profile )
//     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>PEO<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
//     return done(null, profile);
//   }
// )
// );
// passport.serializeUser((user, done) => {
//   done(null, user);
// });
// passport.deserializeUser((user, done) => {
//   done(null, user as Express.User);
// });
// Normal auth routes
router.post('/verifyOTP', auth_controller_1.emailVerification);
router.post('/newuser', signup_controller_1.newUser);
router.post('/login', signin_controller_1.Login);
router.get('/fetchUser/:id', fetchUser_controller_1.fetchUser);
router.put('/updateUser/:id', updateUser_controller_1.updateUser);
router.get('/downloadOrder/:userId', User_1.downloadOrder);
router.get('/fetchUserOrder/:userId', User_1.fetchUserOrder);
// Google OAuth route
router.get('/google', passport_1.default.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '' }), (req, res) => {
    var _a, _b;
    console.log(req.user);
    const userData = req.user;
    console.log("😎😎😎🔥🔥🔥😎😎😎");
    const userId = (_a = userData === null || userData === void 0 ? void 0 : userData.userData) === null || _a === void 0 ? void 0 : _a.user;
    console.log(userId);
    const token = userData.accessToken;
    const user = userData.user;
    console.log('❤️❤️❤️❤️❤️❤️❤️❤️❤️');
    console.log(userId, token, user);
    const userDetails = {
        userId: userId.id,
        userName: userId.name,
        userEmail: userId.email,
        userImage: userId.image,
        userRole: userId.role,
        userSellerProfile: ((_b = userId === null || userId === void 0 ? void 0 : userId.sellerProfile) === null || _b === void 0 ? void 0 : _b.id) || '',
        token: userData.accessToken,
    };
    const userDetailsEncode = encodeURIComponent(JSON.stringify(userDetails));
    console.log(userDetailsEncode);
    if (!userData.isNewUser) {
        res.redirect(`http://localhost:3000/auth/signin?user=${userDetailsEncode}`);
        // res.json({token:userData.accessToken})
    }
    if (userData.isNewUser) {
        res.redirect('http://localhost:3000/auth/signup');
        // res.status(401)
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map