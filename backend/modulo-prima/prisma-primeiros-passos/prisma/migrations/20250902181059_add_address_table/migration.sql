/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "public"."addresses" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "user-id" INTEGER NOT NULL,

    CONSTRAINT "addresses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- AddForeignKey
ALTER TABLE "public"."addresses" ADD CONSTRAINT "addresses_user-id_fkey" FOREIGN KEY ("user-id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
