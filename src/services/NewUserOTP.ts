
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();
export default async function NewUserRegisterOTP(newUser: any) {
  try {
    console.log(newUser+"newqasdfadsf")
    const dbResponse = await prisma.oTPTable.create({
      data:{
        email:newUser.email,
        OTP:newUser.otp,
        isUsed:newUser.Isused
      },
    });
    return dbResponse.id
  } catch (err) {
    return err
  }
}
