import express from "express";
import { cartPage } from "../../controllers/Cart";

const cartRouter = express.Router();

cartRouter.post('/cartPage', cartPage);

export default cartRouter;