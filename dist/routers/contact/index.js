"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminContact_controller_1 = require("../../controllers/Contact/adminContact.controller");
const contactRouter = express_1.default.Router();
contactRouter.post('/admimContact', adminContact_controller_1.adminContact);
exports.default = contactRouter;
//# sourceMappingURL=index.js.map