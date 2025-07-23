-- CreateTable
CREATE TABLE "UserDesignDocument" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderItemId" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserDesignDocument_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserDesignDocument" ADD CONSTRAINT "UserDesignDocument_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDesignDocument" ADD CONSTRAINT "UserDesignDocument_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
