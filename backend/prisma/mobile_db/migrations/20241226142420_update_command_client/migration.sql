/*
  Warnings:

  - You are about to drop the column `commandNumber` on the `client` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "client" DROP CONSTRAINT "client_commandNumber_fkey";

-- DropIndex
DROP INDEX "client_commandNumber_key";

-- AlterTable
ALTER TABLE "client" DROP COLUMN "commandNumber";

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "command"("commandNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
