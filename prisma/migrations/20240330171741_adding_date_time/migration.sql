/*
  Warnings:

  - Added the required column `birthday` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `employee` ADD COLUMN `birthday` DATETIME(3) NOT NULL;
