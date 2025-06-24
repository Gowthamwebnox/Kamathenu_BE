import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const TokenChecking = (req: Request, res: Response): any => {
    const token = req.body.Token;
    console.log(token + " TOKEN");
    try {

        if (token === null) {
            return res.send({
                status: 401,
                message: "User is not authenticated",
                isUser: false
            })
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET_KEY || '');
        if (decoded) {
            console.log("?????????????????????TOKEN CHECKED?????????????????????")
            return res.status(200).json({ message: 'User is authenticated',isUser:true });
            
        }

    } catch (err) {
        console.error("JWT verification failed:", err);
        return res.status(401).json({ message: 'Invalid token',isUser:false });
    }





}