import express from 'express';
import cors from 'cors'
import { emailVerification} from '../controllers/auth.controller';
import { Login, newUser } from '../controllers';
import router from './auth';
import categoryRouter from './catgegory';
const middleware=express()
middleware.use(cors())

middleware.use('/auth' , router)
middleware.use('/category' , categoryRouter)



export default middleware

