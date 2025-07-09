import express from 'express';
import passport from 'passport';
import { emailVerification } from '../../controllers/Auth/auth.controller';
import { any } from 'joi';
import { googleSignin } from '../../controllers/Auth/googlesignin.controller';
import { newUser } from '../../controllers/Auth/signup.controller';
import { Login } from '../../controllers/Auth/signin.controller';
import { fetchUser } from '../../controllers/User/fetchUser.controller';
import { updateUser } from '../../controllers/User/updateUser.controller';

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

router.get('/fetchUser/:id', fetchUser);
router.put('/updateUser/:id', updateUser);


// Google OAuth route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '' }),
  (req, res) => {
    debugger
    console.log(req.user)
    const userData:any = req.user
    console.log("😎😎😎🔥🔥🔥😎😎😎")
    const userId=userData?.userData?.user?.id
    console.log(userId)
    
    const token=userData.accessToken
    const user=userData.user
    console.log(userId,token,user)
    if(!userData.isNewUser){

        res.redirect(`http://localhost:3000/?token=${userData.accessToken}&userId=${userId}}`);
        
        // res.json({token:userData.accessToken})
    }
    if(userData.isNewUser){
        res.redirect('http://localhost:3000/auth/signup');
        // res.status(401)
    }
  }
);




export default router;
