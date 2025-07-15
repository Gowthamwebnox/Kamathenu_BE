import { Router } from "express";
import { fetchCategory } from "../../controllers/seller";
;
const sellerRouter = Router();

sellerRouter.get('/fetchCategory', fetchCategory);

export default sellerRouter;