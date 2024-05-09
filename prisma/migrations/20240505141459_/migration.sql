/*
  Warnings:

  - Added the required column `image` to the `Meal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `meal` ADD COLUMN `image` VARCHAR(191) NOT NULL;
