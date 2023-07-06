/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientEmail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ClientTelephone` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contact` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactEmail` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ContactTelephone` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClientEmail" DROP CONSTRAINT "ClientEmail_client_id_fkey";

-- DropForeignKey
ALTER TABLE "ClientTelephone" DROP CONSTRAINT "ClientTelephone_client_id_fkey";

-- DropForeignKey
ALTER TABLE "Contact" DROP CONSTRAINT "Contact_client_id_fkey";

-- DropForeignKey
ALTER TABLE "ContactEmail" DROP CONSTRAINT "ContactEmail_contact_id_fkey";

-- DropForeignKey
ALTER TABLE "ContactTelephone" DROP CONSTRAINT "ContactTelephone_contact_id_fkey";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "ClientEmail";

-- DropTable
DROP TABLE "ClientTelephone";

-- DropTable
DROP TABLE "Contact";

-- DropTable
DROP TABLE "ContactEmail";

-- DropTable
DROP TABLE "ContactTelephone";

-- CreateTable
CREATE TABLE "clients" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "registration_date" TEXT NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "telephone" TEXT NOT NULL,
    "registration_date" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_email" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "contact_email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_telephone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "contact_id" TEXT NOT NULL,

    CONSTRAINT "contact_telephone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_email" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "client_email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "client_telephone" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "client_telephone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_email" ADD CONSTRAINT "contact_email_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contact_telephone" ADD CONSTRAINT "contact_telephone_contact_id_fkey" FOREIGN KEY ("contact_id") REFERENCES "contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_email" ADD CONSTRAINT "client_email_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "client_telephone" ADD CONSTRAINT "client_telephone_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
