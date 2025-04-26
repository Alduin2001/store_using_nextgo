/*
  Warnings:

  - You are about to drop the column `isVerifyid` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_isVerifyid_idx";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isVerifyid",
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "User_isVerified_idx" ON "User"("isVerified");
