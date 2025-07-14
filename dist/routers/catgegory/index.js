"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getDesignAndFeature_controller_1 = require("../../controllers/Category/getDesignAndFeature.controller");
const getCategory_controller_1 = __importDefault(require("../../controllers/Category/getCategory.controller"));
const categoryRouter = (0, express_1.Router)();
categoryRouter.post("/getAllCategory", getCategory_controller_1.default);
categoryRouter.post("/getDesignAndFeature", getDesignAndFeature_controller_1.getDesignAndFeature);
exports.default = categoryRouter;
//# sourceMappingURL=index.js.map