/*
  Warnings:

  - You are about to drop the `Bucket` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bucket" DROP CONSTRAINT "Bucket_productId_fkey";

-- DropForeignKey
ALTER TABLE "Bucket" DROP CONSTRAINT "Bucket_userBucket_fkey";

-- DropTable
DROP TABLE "Bucket";
