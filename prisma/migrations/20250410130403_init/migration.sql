/*
  Warnings:

  - Made the column `anime_image` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_title` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_alt_image` on table `collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_alt_image` on table `comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `anime_image` on table `comment` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `collection` MODIFY `anime_image` VARCHAR(191) NOT NULL,
    MODIFY `anime_title` VARCHAR(191) NOT NULL,
    MODIFY `anime_alt_image` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `comment` MODIFY `anime_alt_image` VARCHAR(191) NOT NULL,
    MODIFY `anime_image` VARCHAR(191) NOT NULL;
