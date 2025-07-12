import { Request, Response } from "express"
import { fetchUserOrderService } from "../../services/OrderProductService/fetchUserOrderService"

export const fetchUserOrder = async (req:Request,res:Response):Promise<any>=>{
    const userId=req.params.id
    console.log(userId)
    const order=await fetchUserOrderService(userId)
    return res.status(200).json(order)
}
