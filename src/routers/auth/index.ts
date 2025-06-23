import express from 'express';
import passport from 'passport';
import { emailVerification } from '../../controllers/auth.controller';
import { Login, newUser } from '../../controllers';

const router = express.Router();

// Normal auth routes
router.post('/verifyOTP', emailVerification);
router.post('/newuser', newUser);
router.post('/login', Login);

// Google OAuth route
router.get('/google', (req, res, next) => {
    console.log('Google authentication started');
    next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        res.send('Google Authentication Successful!');
    }
);

export default router;
