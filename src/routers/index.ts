import express from 'express';
import cors from 'cors'
// import { emailVerification} from '../controllers/Auth/auth.controller';
// import { Login, newUser } from '../controllers/Auth';
import router from './auth';
import categoryRouter from './catgegory';
import productRouter from './Product';
import contactRouter from './contact';
import cartRouter from './cart';
import orderRouter from './Order';
import sellerRouter from './seller';
import adminRouter from './admin';
const middleware=express()
middleware.use(cors())

middleware.use('/auth' , router)
middleware.use('/category' , categoryRouter)
middleware.use('/product' , productRouter)
middleware.use('/contact' , contactRouter)
middleware.use('/cart' , cartRouter)
middleware.use('/order' , orderRouter)
middleware.use('/seller' , sellerRouter)
middleware.use('/admin' , adminRouter)



export default middleware

