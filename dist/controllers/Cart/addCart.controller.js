"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCart = void 0;
const addUserCart_1 = require("../../services/Cart/addUserCart");
const addCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, userId } = req.body;
    console.log(productId, userId);
    console.log("✨✨✨✨✨✨✨");
    const cart = yield (0, addUserCart_1.addUserCart)(productId, userId);
    return res.status(200).json({ message: "Cart added successfully", cart: cart });
});
exports.addCart = addCart;
//# sourceMappingURL=addCart.controller.js.map