import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export const fetchUserService = async (limit: number, offset: number, search?: string, isEmailVerified?: boolean) => {
    console.log(limit, offset, search, isEmailVerified);
    
    // Build the where clause conditionally
    const whereClause: any = {};
    
    // Add search condition if search is provided
    if (search && search.trim() !== '') {
        whereClause.OR = [
            // { name: { contains: search, mode: 'insensitive' } },
            { email: { contains: search, mode: 'insensitive' } },
            // { firstName: { contains: search, mode: 'insensitive' } },
            // { lastName: { contains: search, mode: 'insensitive' } }
        ];
    }
    
    // Add email verification condition if isEmailVerified is provided
    if (isEmailVerified !== undefined) {
        whereClause.isEmailVerified = isEmailVerified;
    }
    
    console.log(whereClause);
    const users = await prisma.user.findMany({
        where: whereClause,
        take: limit,
        skip: offset,
        orderBy: {
            createdAt: 'desc'
        }
    });
    
    console.log(users);
    return users;
};