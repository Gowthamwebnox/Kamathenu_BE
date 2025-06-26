import { Request, Response } from "express"
import { particularProductService } from "../../services/Product/particularProductService"

const particularProduct = async (req:Request,res:Response):Promise<any>=>{
    const clientData=req.body
    console.log(clientData)
    const productData=await particularProductService(clientData)
    return res.status(200).json({productData})
}

export default particularProduct