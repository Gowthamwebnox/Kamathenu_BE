import express from 'express';
import { emailVerification, Registration } from '../controllers/auth.controller';
const router = express.Router();

router.get('/newUser', Registration);
router.post('/verification' ,emailVerification)

export default router;