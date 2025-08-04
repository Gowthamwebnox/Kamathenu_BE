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
exports.fetchUserService = void 0;
const client_1 = require("../../generated/prisma/client");
const prisma = new client_1.PrismaClient();
const fetchUserService = (limit, offset, search, isEmailVerified) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(limit, offset, search, isEmailVerified);
    // Build the where clause conditionally
    const whereClause = {};
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
    const users = yield prisma.user.findMany({
        where: whereClause,
        take: limit,
        skip: offset,
        orderBy: {
            createdAt: 'desc'
        }
    });
    console.log(users);
    return users;
});
exports.fetchUserService = fetchUserService;
//# sourceMappingURL=fetchUserService.js.map