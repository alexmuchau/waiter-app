/*
  Warnings:

  - Changed the type of `category` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `tableDescription` to the `table` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('CHOPP', 'FOOD');

-- DropForeignKey
ALTER TABLE "command" DROP CONSTRAINT "command_tableNumber_fkey";

-- AlterTable
ALTER TABLE "command" ALTER COLUMN "tableNumber" DROP NOT NULL;

-- AlterTable
ALTER TABLE "product" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;

-- AlterTable
ALTER TABLE "table" ADD COLUMN     "tableDescription" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "command" ADD CONSTRAINT "command_tableNumber_fkey" FOREIGN KEY ("tableNumber") REFERENCES "table"("tableNumber") ON DELETE SET NULL ON UPDATE CASCADE;
