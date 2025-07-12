/*
  Warnings:

  - Added the required column `userId` to the `UserProductDescription` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProductDescription" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserProductDescription" ADD CONSTRAINT "UserProductDescription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
