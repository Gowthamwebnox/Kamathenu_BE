import { Router } from "express";
import { fetchCategory, fetchSellerOrders, fetchSellerProduct, fetchSellerProfile, newProduct, sellerDashboard, updateOrder } from "../../controllers/seller";
;
const sellerRouter = Router();

sellerRouter.get('/fetchCategory', fetchCategory);
sellerRouter.post('/sellerNewProduct', newProduct);
sellerRouter.get('/fetchSellerProduct/:id', fetchSellerProduct);
sellerRouter.get('/fetchSellerOrders/:sellerId', fetchSellerOrders);
sellerRouter.get('/fetchSellerProfile/:sellerId', fetchSellerProfile);
sellerRouter.put('/updateOrder/:orderId', updateOrder);
sellerRouter.get('/sellerDashboard/:id', sellerDashboard);

export default sellerRouter;