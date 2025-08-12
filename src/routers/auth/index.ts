import express from 'express';
import passport from 'passport';
import { emailVerification } from '../../controllers/Auth/auth.controller';
import { any } from 'joi';
import { googleSignin } from '../../controllers/Auth/googlesignin.controller';
import { newUser } from '../../controllers/Auth/signup.controller';
import { Login } from '../../controllers/Auth/signin.controller';
import { fetchUser } from '../../controllers/User/fetchUser.controller';
import { updateUser } from '../../controllers/User/updateUser.controller';
import { downloadOrder, fetchUserOrder } from '../../controllers/User';
import { forgetPassword, updatePassword, verifcationForgetUserOTP } from '../../controllers/Auth';

const router = express.Router();

// Google OAuth
googleSignin()

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
router.post('/verifyOTP', emailVerification);
router.post('/newuser', newUser);
router.post('/login', Login);
router.post('/forgetPassword', forgetPassword);
router.post('/updatePassword', updatePassword);
router.post('/verifcationForgetUserOTP', verifcationForgetUserOTP);
router.get('/fetchUser/:id', fetchUser);
router.put('/updateUser/:id', updateUser);
router.get('/downloadOrder/:userId', downloadOrder);
router.get('/fetchUserOrder/:userId', fetchUserOrder);


// Google OAuth route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '' }),
  (req, res) => {
    console.log(req.user)
    const userData:any = req.user
    console.log("😎😎😎🔥🔥🔥😎😎😎")
    const userId=userData?.userData?.user
    console.log(userId)
    
    const token=userData.accessToken
    const user=userData.user
    console.log('❤️❤️❤️❤️❤️❤️❤️❤️❤️')
    console.log(userId,token,user)
    const userDetails={
      userId:userId.id,
      userName:userId.name,
      userEmail:userId.email,
      userImage:userId.image,
      userRole:userId.role,
      userSellerProfile:userId?.sellerProfile?.id || '',
      token:userData.accessToken,
    }
    const userDetailsEncode= encodeURIComponent(JSON.stringify(userDetails))
    console.log(userDetailsEncode)
    if(!userData.isNewUser){

        res.redirect(`http://localhost:3000/auth/signin?user=${userDetailsEncode}`);
        
        // res.json({token:userData.accessToken})
    }
    if(userData.isNewUser){
        res.redirect('http://localhost:3000/auth/signup');
        // res.status(401)
    }
  }
);




export default router;
