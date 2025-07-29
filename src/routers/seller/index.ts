import { Router } from "express";
import { fetchCategory, fetchSellerOrders, fetchSellerProduct, fetchSellerProfile, newProduct, newSellerRegistration, sellerDashboard, updateOrder, updateSellerBankDetails, updateSellerProfile } from "../../controllers/seller";
;
const sellerRouter = Router();

sellerRouter.get('/fetchCategory', fetchCategory);
sellerRouter.post('/sellerNewProduct', newProduct);
sellerRouter.get('/fetchSellerProduct/:id', fetchSellerProduct);
sellerRouter.get('/fetchSellerOrders/:sellerId', fetchSellerOrders);
sellerRouter.get('/fetchSellerProfile/:sellerId', fetchSellerProfile);
sellerRouter.put('/updateOrder/:orderId', updateOrder);
sellerRouter.get('/sellerDashboard/:id', sellerDashboard);
sellerRouter.post('/newSellerRegistration', newSellerRegistration);
sellerRouter.patch('/updateSellerProfile/:sellerId', updateSellerProfile);
sellerRouter.patch('/updateSellerBankDetails/:sellerId', updateSellerBankDetails);

export default sellerRouter;