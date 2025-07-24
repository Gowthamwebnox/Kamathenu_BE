import { Request, Response } from "express";
import { fetchUserService } from "../../services/admin/fetchUserService";

export const fetchUser = async (req: Request, res: Response) => {
    try {
        const { limit, offset, search, isEmailVerified } = req.query;
        console.log(limit, offset, search, isEmailVerified);
        
        // Parse and convert parameters to correct types
        const parsedLimit = parseInt(limit as string) || 10;
        const parsedOffset = parseInt(offset as string) || 0;
        const parsedSearch = search as string || undefined;
        const parsedIsEmailVerified = isEmailVerified === 'true' ? true : 
                                    isEmailVerified === 'false' ? false : 
                                    undefined;
        
        const users = await fetchUserService(parsedLimit, parsedOffset, parsedSearch, parsedIsEmailVerified);
        res.status(200).json(users);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to fetch users" });
    }
};