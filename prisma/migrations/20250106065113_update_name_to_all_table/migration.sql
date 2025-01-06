/*
  Warnings:

  - You are about to drop the column `title` on the `Certification` table. All the data in the column will be lost.
  - You are about to drop the column `study` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `job` on the `Experience` table. All the data in the column will be lost.
  - Added the required column `name` to the `Certification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Education` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Certification" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Education" DROP COLUMN "study",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "job",
ADD COLUMN     "name" TEXT NOT NULL;
