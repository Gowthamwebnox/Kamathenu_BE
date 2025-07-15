// server.ts

import express, { Request, Response } from 'express';
import session from 'express-session';
import passport from 'passport';
import middleware from './routers';
import jwt from 'jsonwebtoken';
import { TokenChecking } from './services/TokenChecking';

const app = express();
app.use(express.json())
// Express session
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));


app.use("/",(req,res)=> {
    res.send("Kamadenu Server is running on port 8000")
})

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use middleware (which connects all routes)
app.use('/api',middleware);
app.post('/api/me', TokenChecking);
  

// Start the server
app.listen(8000, () => {
    console.log('Server running on port 8000');
});
