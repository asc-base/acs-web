-- CreateTable
CREATE TABLE "example" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "created_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_by" INTEGER NOT NULL,
    "updated_date" TIMESTAMP(3) NOT NULL,
    "updated_by" INTEGER,

    CONSTRAINT "example_pkey" PRIMARY KEY ("id")
);
