import { Router } from "express";
import { fetchCategory } from "../../controllers/seller";
import { approveProduct, approveSellerController, deleteCategory, fetchAllProduct, fetchDashboard, fetchOrders, fetchSellerProfile, fetchUser, getSeller, newCategory, sendOrderDocument, updateCategory } from "../../controllers/admin";

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
adminRouter.put('/approveSeller', approveSellerController);
adminRouter.get('/fetchDashboard', fetchDashboard);
adminRouter.patch('/approveProduct/:id', approveProduct);

export default adminRouter;