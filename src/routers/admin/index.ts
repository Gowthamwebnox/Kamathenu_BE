import { Router } from "express";
import { fetchCategory } from "../../controllers/seller";
import { deleteCategory, fetchAllProduct, fetchOrders, fetchSellerProfile, fetchUser, getSeller, newCategory, sendOrderDocument, updateCategory } from "../../controllers/admin";

const adminRouter = Router();

adminRouter.get('/fetchCategory', fetchCategory);
adminRouter.get('/fetchAllProduct', fetchAllProduct);
adminRouter.get('/getSeller/:userId', getSeller);
adminRouter.get('/fetchUser', fetchUser);
adminRouter.get('/fetchSellerProfile', fetchSellerProfile);
adminRouter.get('/fetchOrders', fetchOrders);
adminRouter.post('/sendOrderDocument', sendOrderDocument);
adminRouter.post('/newCategory', newCategory);
adminRouter.put('/updateCategory', updateCategory);
adminRouter.delete('/deleteCategory/:categoryId', deleteCategory);

export default adminRouter;