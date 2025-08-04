"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seller_1 = require("../../controllers/seller");
;
const sellerRouter = (0, express_1.Router)();
sellerRouter.get('/fetchCategory', seller_1.fetchCategory);
sellerRouter.post('/sellerNewProduct', seller_1.newProduct);
sellerRouter.get('/fetchSellerProduct/:id', seller_1.fetchSellerProduct);
sellerRouter.get('/fetchSellerOrders/:sellerId', seller_1.fetchSellerOrders);
sellerRouter.get('/fetchSellerProfile/:sellerId', seller_1.fetchSellerProfile);
sellerRouter.put('/updateOrder/:orderId', seller_1.updateOrder);
sellerRouter.get('/sellerDashboard/:id', seller_1.sellerDashboard);
sellerRouter.post('/newSellerRegistration', seller_1.newSellerRegistration);
sellerRouter.patch('/updateSellerProfile/:sellerId', seller_1.updateSellerProfile);
sellerRouter.patch('/updateSellerBankDetails/:sellerId', seller_1.updateSellerBankDetails);
exports.default = sellerRouter;
//# sourceMappingURL=index.js.map