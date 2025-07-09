import { Request, Response } from "express";
import { string } from "joi";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { signinUserWithGoogle } from "../../services/signinUserWithGoogle";


const client_ID = process.env.CLIENT_ID || '';

const secretKey = process.env.SECRET_KEY || '';
console.log(client_ID + "client_ID")
console.log(secretKey + "secretKey")



export const googleSignin = async() => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: client_ID,
        clientSecret: secretKey,
        callbackURL: "http://localhost:8000/api/auth/google/callback",
      },
      async(accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) => {
        console.log(profile.emails[0].value+"email" )
        const userData:any = await signinUserWithGoogle(profile.emails[0].value)
        console.log("🔥🔥🔥😎😎😎🔥🔥🔥")
        console.log(userData)
        const token=userData.token
        console.log(token + "token")
        console.log( ">>>>>>>>>>>>>>>>>>>>>>>profile<<<<<<<<<<<<<<<<<<<<<<<<<<")
        if(userData.isUser){
            accessToken=token
            return done(null, {userData,isNewUser:false,accessToken});
        }
        if(!userData.isUser){
            return done(null, {userData,isNewUser:true});
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user as Express.User);
  });
};
