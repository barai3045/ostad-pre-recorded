/*
  Warnings:

  - You are about to drop the column `remarks` on the `user` table. All the data in the column will be lost.
  - Added the required column `col1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col3` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col4` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col6` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `remarks`,
    ADD COLUMN `col1` DATE NOT NULL,
    ADD COLUMN `col2` DATETIME NOT NULL,
    ADD COLUMN `col3` TIMESTAMP NOT NULL,
    ADD COLUMN `col4` TIME NOT NULL,
    ADD COLUMN `col6` DATETIME(3) NOT NULL;
