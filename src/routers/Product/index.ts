import express from "express";
import particularProduct from "../../controllers/Products/particularProduct.controller";
import { addCart } from "../../controllers/Products/addCart.controller";
import { wishlistProduct } from "../../controllers/Products/wishlistProduct.controller";
import { wishlistRemove } from "../../controllers/Products/wishlistRemove.controller";

const productRouter = express.Router();

productRouter.post("/particularProduct", particularProduct);
productRouter.post("/addCart", addCart);
productRouter.post("/addWishlistProduct", wishlistProduct);
productRouter.post("/removeWishlistProduct",wishlistRemove );

export default productRouter;