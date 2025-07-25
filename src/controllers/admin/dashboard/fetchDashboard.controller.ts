import { Request, Response } from "express";
import { fetchDashBoardService } from "../../../services/admin/dashBoard/fetchdashBoardservice";


export const fetchDashboard = async (req: Request, res: Response) => {
    try {
        const dashboard = await fetchDashBoardService();
        
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: "Error fetching dashboard" });
    }
}