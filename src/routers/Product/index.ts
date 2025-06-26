import express from "express";
import particularProduct from "../../controllers/Products/particularProduct.controller";
import { addCart } from "../../controllers/Products/addCart.controller";

const productRouter = express.Router();

productRouter.post("/particularProduct", particularProduct);
productRouter.post("/addCart", addCart);

export default productRouter;