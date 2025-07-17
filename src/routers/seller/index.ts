import { Router } from "express";
import { fetchCategory, fetchSellerOrders, fetchSellerProduct, fetchSellerProfile, newProduct } from "../../controllers/seller";
;
const sellerRouter = Router();

sellerRouter.get('/fetchCategory', fetchCategory);
sellerRouter.post('/sellerNewProduct', newProduct);
sellerRouter.get('/fetchSellerProduct/:id', fetchSellerProduct);
sellerRouter.get('/fetchSellerOrders/:sellerId', fetchSellerOrders);
sellerRouter.get('/fetchSellerProfile/:sellerId', fetchSellerProfile);

export default sellerRouter;