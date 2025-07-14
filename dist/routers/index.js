"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = __importDefault(require("./auth"));
const catgegory_1 = __importDefault(require("./catgegory"));
const Product_1 = __importDefault(require("./Product"));
const contact_1 = __importDefault(require("./contact"));
const cart_1 = __importDefault(require("./cart"));
const Order_1 = __importDefault(require("./Order"));
const middleware = (0, express_1.default)();
middleware.use((0, cors_1.default)());
middleware.use('/auth', auth_1.default);
middleware.use('/category', catgegory_1.default);
middleware.use('/product', Product_1.default);
middleware.use('/contact', contact_1.default);
middleware.use('/cart', cart_1.default);
middleware.use('/order', Order_1.default);
exports.default = middleware;
//# sourceMappingURL=index.js.map