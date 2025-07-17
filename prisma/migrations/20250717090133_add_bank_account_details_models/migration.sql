-- CreateTable
CREATE TABLE "BankAccountDetails" (
    "id" TEXT NOT NULL,
    "accountHolderName" TEXT NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "bankName" TEXT NOT NULL,
    "ifscCode" TEXT NOT NULL,
    "branchName" TEXT,
    "accountType" TEXT,
    "sellerProfileId" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "verificationDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BankAccountDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankAccountDetails_sellerProfileId_key" ON "BankAccountDetails"("sellerProfileId");

-- CreateIndex
CREATE INDEX "BankAccountDetails_accountNumber_idx" ON "BankAccountDetails"("accountNumber");

-- CreateIndex
CREATE INDEX "BankAccountDetails_ifscCode_idx" ON "BankAccountDetails"("ifscCode");

-- AddForeignKey
ALTER TABLE "BankAccountDetails" ADD CONSTRAINT "BankAccountDetails_sellerProfileId_fkey" FOREIGN KEY ("sellerProfileId") REFERENCES "SellerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
