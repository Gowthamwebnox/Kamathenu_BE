import { Request, Response } from "express";
import { string } from "joi";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";




export const googleSignin = (req: Request, res: Response) => {
//   const client_ID = process.env.client_ID!;

//   const secretKey = process.env.secret_Key!;

//   passport.use(
//   new GoogleStrategy(
//     {
//       clientID: client_ID,
//       clientSecret: secretKey,
//       callbackURL: "http://localhost:8000/auth/google/callback",
//     },
//     (accessToken: any, refreshToken: any, profile: any, done: (arg0: null, arg1: any) => any) => {
//       return done(null, profile);
//     }
//   )
// );

  // Serialize user
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  // Deserialize user
  passport.deserializeUser((user, done) => {
    done(null, user as Express.User);
  });
};
