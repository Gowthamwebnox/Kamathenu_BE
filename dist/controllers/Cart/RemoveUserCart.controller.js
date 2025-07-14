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
exports.RemoveUserCart = void 0;
const removeCart_1 = require("../../services/Cart/removeCart");
const RemoveUserCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartId } = req.body;
    console.log(cartId);
    const cart = yield (0, removeCart_1.removeCart)(cartId);
    res.status(200).json({ message: "Cart removed successfully" });
});
exports.RemoveUserCart = RemoveUserCart;
//# sourceMappingURL=RemoveUserCart.controller.js.map