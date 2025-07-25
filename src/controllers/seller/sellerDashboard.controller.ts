

import { Request, Response } from "express";
import { fetchDashboardService } from "../../services/seller/fetchDashboardService";

export const sellerDashboard = async (req: Request, res: Response) => {
    try {
        const {id} = req.params;
        const dashboard = await fetchDashboardService(id);
        res.status(200).json(dashboard);
    } catch (error) {
        res.status(500).json({ message: "Error fetching dashboard" });
    }
}