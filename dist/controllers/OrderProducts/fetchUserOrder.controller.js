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
exports.fetchUserOrder = void 0;
const fetchUserOrderService_1 = require("../../services/OrderProductService/fetchUserOrderService");
const fetchUserOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    console.log(userId);
    const order = yield (0, fetchUserOrderService_1.fetchUserOrderService)(userId);
    return res.status(200).json(order);
});
exports.fetchUserOrder = fetchUserOrder;
//# sourceMappingURL=fetchUserOrder.controller.js.map