import express from 'express';
import passport from 'passport';
import { emailVerification } from '../../controllers/auth.controller';
import { Login, newUser } from '../../controllers';
import { googleSignin } from '../../controllers/googlesignin.controller';
import { any } from 'joi';

const router = express.Router();

// Google OAuth
googleSignin()
console.log(googleSignin())
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



// Google OAuth route
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '' }),
  (req, res) => {
    debugger
    console.log(req.user)
    const userData:any = req.user
    if(!userData.isNewUser){
        res.redirect(`http://localhost:3000/`);
        
        res.json({token:userData.accessToken})
    }
    if(userData.isNewUser){
        // res.redirect('http://localhost:3000/auth/signup');
        res.status(401)
    }
  }
);




export default router;
