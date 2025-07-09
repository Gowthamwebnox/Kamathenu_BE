import { Request, Response } from "express";
import { updateUserService } from "../../services/User/updateUserSerivce";

export const updateUser = async (req: Request, res: Response):Promise<any> => {
    const userId = req.params.id;
    const updateData=req.body;
    console.log(updateData);
    console.log("🎊🎊🎊🎊🎊🎊🎊🎊");
    console.log(userId);
    const user = await updateUserService(userId,updateData);
    res.status(200).json(user);
}