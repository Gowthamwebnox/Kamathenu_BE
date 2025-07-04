import express from "express";
import particularProduct from "../../controllers/Products/particularProduct.controller";
import { addCart } from "../../controllers/Products/addCart.controller";
import { wishlistProduct } from "../../controllers/Products/wishlistProduct.controller";

const productRouter = express.Router();

productRouter.post("/particularProduct", particularProduct);
productRouter.post("/addCart", addCart);
productRouter.post("/removeWishlistProduct", wishlistProduct);

export default productRouter;