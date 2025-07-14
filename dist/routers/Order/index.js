"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OrderProducts_1 = require("../../controllers/OrderProducts");
const orderRouter = (0, express_1.Router)();
orderRouter.post('/createOrder', OrderProducts_1.orderProducts);
orderRouter.get('/fetchUserOrder/:id', OrderProducts_1.fetchUserOrder);
exports.default = orderRouter;
//# sourceMappingURL=index.js.map