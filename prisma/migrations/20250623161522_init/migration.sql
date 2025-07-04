/*
  Warnings:

  - The values [Canceled] on the enum `LEAVE_APPROVAL` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "LEAVE_APPROVAL_new" AS ENUM ('APPROVED_BY_MANAGER', 'APPROVED', 'APPROVED_BY_HR', 'APPROVED_BY_ADMIN', 'AUTO_APPROVED', 'PENDING', 'REJECTED', 'CANCELLED');
ALTER TABLE "leave_status" ALTER COLUMN "name" DROP DEFAULT;
ALTER TABLE "leave_status" ALTER COLUMN "name" TYPE "LEAVE_APPROVAL_new" USING ("name"::text::"LEAVE_APPROVAL_new");
ALTER TYPE "LEAVE_APPROVAL" RENAME TO "LEAVE_APPROVAL_old";
ALTER TYPE "LEAVE_APPROVAL_new" RENAME TO "LEAVE_APPROVAL";
DROP TYPE "LEAVE_APPROVAL_old";
ALTER TABLE "leave_status" ALTER COLUMN "name" SET DEFAULT 'PENDING';
COMMIT;
