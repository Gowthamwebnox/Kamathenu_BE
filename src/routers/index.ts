import express from 'express';
import { emailVerification, Registration } from '../controllers/auth.controller';
import { Login, newUser } from '../controllers';
const router = express.Router();

router.post('/verifyOTP' , emailVerification)
router.post('/newuser', newUser)
router.post('/login',Login)


export default router;