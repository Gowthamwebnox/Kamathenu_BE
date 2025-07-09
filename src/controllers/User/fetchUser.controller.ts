import { Request, Response } from "express";
import { fetchUserService } from "../../services/User/fetchUserService";

export const fetchUser = async (req: Request, res: Response):Promise<any> => {
    const userId = req.params;
    try {
        const user = await fetchUserService(userId.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message:"User not found"});
    }
};
