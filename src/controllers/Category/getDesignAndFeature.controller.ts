import { Request, Response } from "express";
import { getDesignAndFeatureService } from "../../services/Category/getDesignAndFeatureService";


export const getDesignAndFeature = async (req:Request,res:Response):Promise<any>=>{
    const clientData=req.body
    console.log("clientData👍👍👍👍👍👍👍👍",clientData)

    const designData=await getDesignAndFeatureService(clientData)
    console.log("designData👍👍👍👍👍👍👍👍",designData)
    return res.status(200).json(designData)
}