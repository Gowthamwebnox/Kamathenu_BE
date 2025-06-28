/*
  Warnings:

  - You are about to drop the column `additionalPrice` on the `ProductVariant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ProductVariant" DROP COLUMN "additionalPrice",
ADD COLUMN     "discountPrice" DECIMAL(65,30) NOT NULL DEFAULT 0;
