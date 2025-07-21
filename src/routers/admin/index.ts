import { Router } from "express";
import { fetchCategory } from "../../controllers/seller";
import { fetchAllProduct, fetchSellerProfile, fetchUser, getSeller } from "../../controllers/admin";

const adminRouter = Router();

adminRouter.get('/fetchCategory', fetchCategory);
adminRouter.get('/fetchAllProduct', fetchAllProduct);
adminRouter.get('/getSeller/:userId', getSeller);
adminRouter.get('/fetchUser', fetchUser);
adminRouter.get('/fetchSellerProfile', fetchSellerProfile);

export default adminRouter;