/*
  Warnings:

  - You are about to drop the `activeTableCommand` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tableNumber` to the `command` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "activeTableCommand" DROP CONSTRAINT "activeTableCommand_commandNumber_fkey";

-- DropForeignKey
ALTER TABLE "activeTableCommand" DROP CONSTRAINT "activeTableCommand_tableNumber_fkey";

-- AlterTable
ALTER TABLE "command" ADD COLUMN     "tableNumber" INTEGER NOT NULL;

-- DropTable
DROP TABLE "activeTableCommand";

-- AddForeignKey
ALTER TABLE "command" ADD CONSTRAINT "command_tableNumber_fkey" FOREIGN KEY ("tableNumber") REFERENCES "table"("tableNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
