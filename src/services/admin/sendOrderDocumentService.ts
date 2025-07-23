import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();


export const sendOrderDocumentService = async (orderDocument: any) => {
    console.log(orderDocument);
    try {

        if (orderDocument?.id) {
            const userDocument = await prisma.userDesignDocument.delete({
                where: {
                    id: orderDocument.id
                }
            })
            console.log(userDocument);
            return userDocument;
        }
        else {
            const userDocument = await prisma.userDesignDocument.create({
                data: {
                    userId: orderDocument.userId,
                    orderItemId: orderDocument.orderId,
                    document: orderDocument.designUrl,
                }
            })
            console.log(userDocument);
            return userDocument;
        }
    }
    catch (err) {
        throw new Error("Failed to send order document");
    }
}