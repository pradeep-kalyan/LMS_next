-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'HR', 'MANAGER', 'EMPLOYEE');

-- CreateEnum
CREATE TYPE "LEAVE_TYPE" AS ENUM ('SICK', 'CASUAL', 'PAID', 'ANNUAL', 'MONTHLY', 'PERSONAL', 'MATERNITY', 'PATERNITY', 'BEREAVEMENT', 'CTO', 'LWP');

-- CreateEnum
CREATE TYPE "LEAVE_APPROVAL" AS ENUM ('APPROVED_BY_MANAGER', 'APPROVED', 'APPROVED_BY_HR', 'APPROVED_BY_ADMIN', 'AUTO_APPROVED', 'PENDING', 'REJECTED');

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" "Role" NOT NULL DEFAULT 'EMPLOYEE',
    "description" TEXT NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_types" (
    "id" TEXT NOT NULL,
    "name" "LEAVE_TYPE" NOT NULL DEFAULT 'CASUAL',
    "description" TEXT NOT NULL,
    "max_days_per_request" TEXT NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leave_types_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_status" (
    "id" SERIAL NOT NULL,
    "name" "LEAVE_APPROVAL" NOT NULL DEFAULT 'PENDING',
    "description" TEXT NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "leave_status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "cus_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_request" (
    "id" TEXT NOT NULL,
    "cus_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "no_of_days" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "applied_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    "leave_type_id" "LEAVE_TYPE" NOT NULL,
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "leave_request_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_request_history" (
    "id" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "leave_request_id" TEXT NOT NULL,
    "status_id" INTEGER NOT NULL,
    "updated_by" TEXT NOT NULL,

    CONSTRAINT "leave_request_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_balance" (
    "id" TEXT NOT NULL,
    "yearly" INTEGER NOT NULL,
    "totalEntitlement" INTEGER NOT NULL,
    "year" INTEGER NOT NULL,
    "used" INTEGER NOT NULL,
    "pending" INTEGER NOT NULL,
    "carried_over" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "leave_type_id" "LEAVE_TYPE" NOT NULL,

    CONSTRAINT "leave_balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "leave_policy" (
    "id" TEXT NOT NULL,
    "max_days_per_year" INTEGER NOT NULL,
    "max_days_per_request" INTEGER NOT NULL,
    "carry_over_limit" INTEGER NOT NULL,
    "carry_over_expiry" INTEGER NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "effective_from" TIMESTAMP(3) NOT NULL,
    "effective_to" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "leave_type_id" "LEAVE_TYPE" NOT NULL,
    "department_id" TEXT,

    CONSTRAINT "leave_policy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "holiday" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "is_Recurring" BOOLEAN NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "department_id" TEXT,

    CONSTRAINT "holiday_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "cus_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "joined_date" TIMESTAMP(3) NOT NULL,
    "is_Active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "role_id" INTEGER NOT NULL,
    "department_name" TEXT NOT NULL,
    "manager_id" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "leave_types_name_key" ON "leave_types"("name");

-- CreateIndex
CREATE UNIQUE INDEX "departments_cus_id_key" ON "departments"("cus_id");

-- CreateIndex
CREATE UNIQUE INDEX "leave_request_cus_id_key" ON "leave_request"("cus_id");

-- CreateIndex
CREATE UNIQUE INDEX "leave_balance_user_id_leave_type_id_year_key" ON "leave_balance"("user_id", "leave_type_id", "year");

-- CreateIndex
CREATE UNIQUE INDEX "user_cus_id_key" ON "user"("cus_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("cus_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "leave_types"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request" ADD CONSTRAINT "leave_request_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "leave_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request_history" ADD CONSTRAINT "leave_request_history_leave_request_id_fkey" FOREIGN KEY ("leave_request_id") REFERENCES "leave_request"("cus_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request_history" ADD CONSTRAINT "leave_request_history_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "leave_status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_request_history" ADD CONSTRAINT "leave_request_history_updated_by_fkey" FOREIGN KEY ("updated_by") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_balance" ADD CONSTRAINT "leave_balance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("cus_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_balance" ADD CONSTRAINT "leave_balance_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "leave_types"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_policy" ADD CONSTRAINT "leave_policy_leave_type_id_fkey" FOREIGN KEY ("leave_type_id") REFERENCES "leave_types"("name") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "leave_policy" ADD CONSTRAINT "leave_policy_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("cus_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "holiday" ADD CONSTRAINT "holiday_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "departments"("cus_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_department_name_fkey" FOREIGN KEY ("department_name") REFERENCES "departments"("cus_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "user"("cus_id") ON DELETE SET NULL ON UPDATE CASCADE;
