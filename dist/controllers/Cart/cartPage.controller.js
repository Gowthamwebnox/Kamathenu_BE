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
exports.cartPage = void 0;
const displayUserCart_1 = require("../../services/Cart/displayUserCart");
const cartPage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.body;
    const cart = yield (0, displayUserCart_1.displayUserCart)(userId);
    return res.status(200).json({ cart });
});
exports.cartPage = cartPage;
//# sourceMappingURL=cartPage.controller.js.map