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
const particularProductService_1 = require("../../services/Product/particularProductService");
const particularProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    debugger;
    console.log("clientData🎊🎊🎊🎊🎊🎊🎊😊😊😊😊😊😊😊😊😊😊", clientData);
    console.log(clientData);
    const productData = yield (0, particularProductService_1.particularProductService)(clientData);
    return res.status(200).json({ productData });
});
exports.default = particularProduct;
//# sourceMappingURL=particularProduct.controller.js.map