/*
  Warnings:

  - You are about to drop the column `city` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `postcode` on the `user` table. All the data in the column will be lost.
  - Added the required column `remarks` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `city`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `postcode`,
    ADD COLUMN `remarks` ENUM('New', 'Existing', 'VIP', 'Regular', 'Bad') NOT NULL;
