/*
  Warnings:

  - You are about to drop the column `city` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `postcode` on the `user` table. All the data in the column will be lost.
  - Added the required column `col1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col4` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col6` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col7` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col8` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col9` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `city`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `postcode`,
    ADD COLUMN `col1` VARCHAR(191) NOT NULL,
    ADD COLUMN `col2` VARCHAR(191) NULL,
    ADD COLUMN `col3` VARCHAR(191) NOT NULL DEFAULT 'Bangladesh',
    ADD COLUMN `col4` VARCHAR(1000) NOT NULL,
    ADD COLUMN `col6` TINYTEXT NOT NULL,
    ADD COLUMN `col7` TEXT NOT NULL,
    ADD COLUMN `col8` LONGTEXT NOT NULL,
    ADD COLUMN `col9` MEDIUMTEXT NOT NULL;
