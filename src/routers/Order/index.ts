import { Router } from "express";
import { fetchUserOrder, orderProducts } from "../../controllers/OrderProducts";

const orderRouter=Router()

orderRouter.post('/createOrder',orderProducts)
orderRouter.get('/fetchUserOrder/:id',fetchUserOrder)

export default orderRouter