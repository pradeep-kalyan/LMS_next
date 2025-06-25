/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `leave_status` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "leave_status" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "leave_status_id_seq";

-- CreateIndex
CREATE UNIQUE INDEX "leave_status_name_key" ON "leave_status"("name");
