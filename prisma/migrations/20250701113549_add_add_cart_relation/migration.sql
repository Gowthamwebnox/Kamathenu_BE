-- AddForeignKey
ALTER TABLE "AddCart" ADD CONSTRAINT "AddCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
