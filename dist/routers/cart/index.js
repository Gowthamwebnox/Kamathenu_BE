"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Cart_1 = require("../../controllers/Cart");
const cartRouter = express_1.default.Router();
cartRouter.post('/cartPage', Cart_1.cartPage);
cartRouter.post('/removeUserCart', Cart_1.RemoveUserCart);
cartRouter.post('/addCart', Cart_1.addCart);
exports.default = cartRouter;
//# sourceMappingURL=index.js.map