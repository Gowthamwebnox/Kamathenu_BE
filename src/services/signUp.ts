
import { PrismaClient } from "../generated/prisma/client";

const prisma = new PrismaClient();

interface UserData {
  email: string;
  password: string;
  hasedPwd: string;
  firstName: string;
  lastName: string;
  name: string;
  number: string;
  emailVerified: boolean;
  roleId: string; // e.g. "USER"
}

async function OTPCheck(id: string, otp: number) {
  try {
    const dbResponseOTP = await prisma.oTPTable.findUnique({
      where: {
        id: id,
      },
    });
    console.log(dbResponseOTP);
    if (dbResponseOTP?.OTP === otp) {
      const updateOTPData = await prisma.oTPTable.update({
        where: {
          id: id,
        },
        data: {
          isUsed: true,
        },
      });
      //   console.log(updateOTPData.isUsed)
      return updateOTPData.isUsed;
    }
  } catch (err) {
    return err;
  }
}

async function NewUser(userData: UserData) {
  try {
    console.log(userData);
    const dbResponseNewUser = await prisma.user.create({
      data: {
        name: userData.name,
        email: userData.email,
        password: userData.password,
        hasedPassword: userData.hasedPwd,
        roleId: userData.roleId,
        isEmailVerified: userData.emailVerified,
        firstName: userData.firstName,
        lastName: userData.lastName,
        number: userData.number,
      },
    });
    console.log(dbResponseNewUser +">>>>>>>>>>>>>>>>>>> 🔥USER CREATED🔥 <<<<<<<<<<<<<<<<<<<<<<<<");
    return dbResponseNewUser;
  } catch (error) {
    console.error("Prisma error: ", error);
    throw error;
  }
}

module.exports = { OTPCheck, NewUser };
