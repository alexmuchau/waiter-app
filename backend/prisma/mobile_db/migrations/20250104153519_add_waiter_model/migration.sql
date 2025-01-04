-- CreateTable
CREATE TABLE "waiter" (
    "waiterId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "waiter_pkey" PRIMARY KEY ("waiterId")
);
