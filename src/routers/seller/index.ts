import { Router } from "express";
import { fetchCategory, fetchSellerOrders, fetchSellerProduct, newProduct } from "../../controllers/seller";
;
const sellerRouter = Router();

sellerRouter.get('/fetchCategory', fetchCategory);
sellerRouter.get('/sellerNewProduct', newProduct);
sellerRouter.get('/fetchSellerProduct/:id', fetchSellerProduct);
sellerRouter.get('/fetchSellerOrders/:sellerId', fetchSellerOrders);

export default sellerRouter;