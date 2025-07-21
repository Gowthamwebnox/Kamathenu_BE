import { Request, Response } from "express";
import { fetchUserService } from "../../services/admin/fetchUserService";


export const fetchUser = async (req: Request, res: Response) => {
    const users = await fetchUserService();
    res.status(200).json(users);
}