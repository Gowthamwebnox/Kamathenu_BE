import { PrismaClient } from "../../../generated/prisma"


const prisma = new PrismaClient();

export const fetchDashBoardService = async () => {
    try {
        // Calculate date for last 6 days
        const sixDaysAgo = new Date();
        sixDaysAgo.setDate(sixDaysAgo.getDate() - 6);

        // Total counts
        const totalUsers = await prisma.user.count();
        const totalSellers = await prisma.user.count({
            where: {
                roleId: "SELLER"
            }
        });
        const totalProducts = await prisma.product.count();
        const totalOrders = await prisma.order.count();
        const totalCategories = await prisma.category.count();

        // Last 6 days counts
        const last6DaysUsers = await prisma.user.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });

        const last6DaysSellers = await prisma.user.count({
            where: {
                roleId: "SELLER",
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });

        const last6DaysProducts = await prisma.product.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });

        const last6DaysOrders = await prisma.order.count({
            where: {
                createdAt: {
                    gte: sixDaysAgo
                }
            }
        });

        const last6DaysCategories = await prisma.category.count({
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
        }
    } catch (error) {
        throw new Error("Error fetching dashboard");
    }
}