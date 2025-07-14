"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const particularProduct_controller_1 = __importDefault(require("../../controllers/Products/particularProduct.controller"));
// import { addCart } from "../../controllers/Products/addCart.controller";
const wishlistProduct_controller_1 = require("../../controllers/Products/wishlistProduct.controller");
const wishlistRemove_controller_1 = require("../../controllers/Products/wishlistRemove.controller");
const fetchWishlist_controller_1 = require("../../controllers/Products/fetchWishlist.controller");
const productRouter = express_1.default.Router();
productRouter.post("/particularProduct", particularProduct_controller_1.default);
// productRouter.post("/addCart", addCart);
productRouter.post("/addWishlistProduct", wishlistProduct_controller_1.wishlistProduct);
productRouter.post("/removeWishlistProduct", wishlistRemove_controller_1.wishlistRemove);
productRouter.post("/fetchWishlist", fetchWishlist_controller_1.fetchWishlist);
exports.default = productRouter;
//# sourceMappingURL=index.js.map