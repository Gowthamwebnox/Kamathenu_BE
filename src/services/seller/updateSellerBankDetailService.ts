import { PrismaClient } from "../../generated/prisma/client"

const prisma=new PrismaClient()

export const updateSellerBankDetailService=async(bankDetails:any,sellerId:any)=>{
    try{
        const updateSellerBankDetails=await prisma.sellerProfile.update({
            where:{
                id:sellerId
            },
            data:{
                bankAccount:{
                    update:{
                        data:{
                            accountHolderName:bankDetails.accountHolderName,
                            accountNumber:bankDetails.accountNumber,
                            bankName:bankDetails.bankName,
                            ifscCode:bankDetails.ifscCode,
                            branchName:bankDetails.branchName,
                        }
                    }
                }
            }
        })
        return updateSellerBankDetails
    }
    catch{
        throw new Error("Internal Server Error")
    }
}