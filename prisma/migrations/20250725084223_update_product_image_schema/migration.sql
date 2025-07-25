/*
  Warnings:

  - Changed the type of `imageUrl` on the `ProductImage` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ProductImage" DROP COLUMN "imageUrl",
ADD COLUMN     "imageUrl" JSONB NOT NULL;
