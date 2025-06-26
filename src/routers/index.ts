import express from 'express';
import cors from 'cors'
import { emailVerification} from '../controllers/Auth/auth.controller';
import { Login, newUser } from '../controllers/Auth';
import router from './auth';
import categoryRouter from './catgegory';
import productRouter from './Product';
const middleware=express()
middleware.use(cors())

middleware.use('/auth' , router)
middleware.use('/category' , categoryRouter)
middleware.use('/product' , productRouter)



export default middleware

