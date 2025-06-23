import { Request, Response } from "express";
import { string } from "joi";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

// # Environment variables declared in this file are automatically made available to Prisma.
// # See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

// # Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
// # See the documentation for all the connection string options: https://pris.ly/d/connection-strings

// DATABASE_URL="postgresql://postgres:Gowthamraj@2003@localhost:5432/kamathenu?schema=public"
// # DATABASE_URL="postgresql://postgres:Webnox@2025@localhost:5432/kamathenu?schema=public"



// secret_Key='0ab35d420f6511c368509e1e90dbf1fd9fa784396bb11703ea655d7dbffd87f17c3ecefe0da96516b34a2b12a980d48c788d861a6a2d4602b42a306ebebaeda2'
// client_ID='380142193554-4bl3riuhgg8uf31lfho7vj3m27ukdpv6.apps.googleusercontent.com'
// secret_Key='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'


export const googleSignin = (req: Request, res: Response) => {
  // client_ID='380142193554-4bl3riuhgg8uf31lfho7vj3m27ukdpv6.apps.googleusercontent.com'
  // Client_SecretKey="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"
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
