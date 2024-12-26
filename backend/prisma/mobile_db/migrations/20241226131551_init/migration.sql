-- CreateTable
CREATE TABLE "table" (
    "tableNumber" INTEGER NOT NULL,

    CONSTRAINT "table_pkey" PRIMARY KEY ("tableNumber")
);

-- CreateTable
CREATE TABLE "command" (
    "commandNumber" INTEGER NOT NULL,

    CONSTRAINT "command_pkey" PRIMARY KEY ("commandNumber")
);

-- CreateTable
CREATE TABLE "activeTableCommand" (
    "commandNumber" INTEGER NOT NULL,
    "tableNumber" INTEGER NOT NULL,

    CONSTRAINT "activeTableCommand_pkey" PRIMARY KEY ("commandNumber")
);

-- CreateTable
CREATE TABLE "client" (
    "clientId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "commandNumber" INTEGER NOT NULL,

    CONSTRAINT "client_pkey" PRIMARY KEY ("clientId")
);

-- CreateTable
CREATE TABLE "product" (
    "productId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("productId")
);

-- CreateIndex
CREATE UNIQUE INDEX "client_commandNumber_key" ON "client"("commandNumber");

-- AddForeignKey
ALTER TABLE "activeTableCommand" ADD CONSTRAINT "activeTableCommand_tableNumber_fkey" FOREIGN KEY ("tableNumber") REFERENCES "table"("tableNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activeTableCommand" ADD CONSTRAINT "activeTableCommand_commandNumber_fkey" FOREIGN KEY ("commandNumber") REFERENCES "command"("commandNumber") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client" ADD CONSTRAINT "client_commandNumber_fkey" FOREIGN KEY ("commandNumber") REFERENCES "command"("commandNumber") ON DELETE RESTRICT ON UPDATE CASCADE;
