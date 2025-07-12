import express from "express";
import { addCart, cartPage, RemoveUserCart } from "../../controllers/Cart";

const cartRouter = express.Router();

cartRouter.post('/cartPage', cartPage);
cartRouter.post('/removeUserCart', RemoveUserCart);
cartRouter.post('/addCart', addCart);

export default cartRouter;