import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const fetchUserService = async () => {
    const users = await prisma.user.findMany();
    return users;
}