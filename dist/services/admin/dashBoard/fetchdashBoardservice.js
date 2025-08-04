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
exports.fetchDashBoardService = void 0;
const prisma_1 = require("../../../generated/prisma");
const prisma = new prisma_1.PrismaClient();
const fetchDashBoardService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Calculate date for last 6 days
        const sixDaysAgo = new Date();
        sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);
        // Total counts
        const totalUsers = yield prisma.user.count();
        const totalSellers = yield prisma.user.count({
            where: {
                roleId: "SELLER"
            }
        });
        const totalProducts = yield prisma.product.count();
        const totalOrders = yield prisma.order.count();
        const totalCategories = yield prisma.category.count();
        // Last 6 days counts
        const last6DaysUsers = yield prisma.user.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });
        const last6DaysSellers = yield prisma.user.count({
            where: {
                roleId: "SELLER",
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });
        const last6DaysProducts = yield prisma.product.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });
        const last6DaysOrders = yield prisma.order.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });
        const last6DaysCategories = yield prisma.category.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });
        return {
            totalUsers,
            totalSellers,
            totalProducts,
            totalOrders,
            totalCategories,
            last6DaysUsers,
            last6DaysSellers,
            last6DaysProducts,
            last6DaysOrders,
            last6DaysCategories
        };
    }
    catch (error) {
        throw new Error("Error fetching dashboard");
    }
});
exports.fetchDashBoardService = fetchDashBoardService;
//# sourceMappingURL=fetchdashBoardservice.js.map