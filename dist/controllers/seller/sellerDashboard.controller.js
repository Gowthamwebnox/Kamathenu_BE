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
exports.sellerDashboard = void 0;
const fetchDashboardService_1 = require("../../services/seller/fetchDashboardService");
const sellerDashboard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dashboard = yield (0, fetchDashboardService_1.fetchDashboardService)(id);
        res.status(200).json(dashboard);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching dashboard" });
    }
});
exports.sellerDashboard = sellerDashboard;
//# sourceMappingURL=sellerDashboard.controller.js.map