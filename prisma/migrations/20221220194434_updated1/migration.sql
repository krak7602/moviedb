/*
  Warnings:

  - You are about to drop the column `user_id` on the `review` table. All the data in the column will be lost.
  - Added the required column `user_name` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `review` DROP FOREIGN KEY `review_user_id_fkey`;

-- AlterTable
ALTER TABLE `review` DROP COLUMN `user_id`,
    ADD COLUMN `user_name` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `review` ADD CONSTRAINT `review_user_name_fkey` FOREIGN KEY (`user_name`) REFERENCES `user`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
