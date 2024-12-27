/*
  Warnings:

  - You are about to drop the column `tech` on the `Portfolio` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Portfolio" DROP COLUMN "tech",
ADD COLUMN     "techs" TEXT[];
