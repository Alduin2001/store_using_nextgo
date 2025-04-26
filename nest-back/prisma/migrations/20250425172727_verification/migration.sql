-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerifyid" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "Verify" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Verify_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Verify_userId_key" ON "Verify"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Verify_token_key" ON "Verify"("token");

-- CreateIndex
CREATE INDEX "Verify_userId_idx" ON "Verify"("userId");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_isVerifyid_idx" ON "User"("isVerifyid");

-- AddForeignKey
ALTER TABLE "Verify" ADD CONSTRAINT "Verify_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
