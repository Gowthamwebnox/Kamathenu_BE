import express from "express";
import { cartPage, RemoveUserCart } from "../../controllers/Cart";

const cartRouter = express.Router();

cartRouter.post('/cartPage', cartPage);
cartRouter.post('/removeUserCart', RemoveUserCart);

export default cartRouter;