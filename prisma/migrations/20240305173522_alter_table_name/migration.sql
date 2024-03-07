/*
  Warnings:

  - You are about to drop the `example` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "example";

-- CreateTable
CREATE TABLE "exmaple" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "updated_by" INTEGER,

    CONSTRAINT "exmaple_pkey" PRIMARY KEY ("id")
);
