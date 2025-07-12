import express from 'express';
import cors from 'cors'
import { emailVerification} from '../controllers/Auth/auth.controller';
import { Login, newUser } from '../controllers/Auth';
import router from './auth';
import categoryRouter from './catgegory';
import productRouter from './Product';
import contactRouter from './contact';
import cartRouter from './cart';
import orderRouter from './Order';
const middleware=express()
middleware.use(cors())

middleware.use('/auth' , router)
middleware.use('/category' , categoryRouter)
middleware.use('/product' , productRouter)
middleware.use('/contact' , contactRouter)
middleware.use('/cart' , cartRouter)
middleware.use('/order' , orderRouter)



export default middleware

