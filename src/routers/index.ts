import express from 'express';
import cors from 'cors'
import { emailVerification} from '../controllers/auth.controller';
import { Login, newUser } from '../controllers';
import router from './auth';
const middleware=express()
middleware.use(cors())

middleware.use('/auth' , router)


export default middleware

