-- CreateTable
CREATE TABLE "UserProductDescription" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProductDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserProductDescription" ADD CONSTRAINT "UserProductDescription_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
