-- AlterTable
ALTER TABLE "user" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "ProductDetails" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "designInformation" JSONB NOT NULL,
    "designDeatils" JSONB NOT NULL,
    "packageDetails" JSONB NOT NULL,
    "deliveryDetails" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductDetails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductDetails" ADD CONSTRAINT "ProductDetails_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
