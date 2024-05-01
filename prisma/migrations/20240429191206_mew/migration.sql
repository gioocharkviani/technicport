-- CreateTable
CREATE TABLE `About` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `aboutus_ge` VARCHAR(191) NOT NULL,
    `aboutus_en` VARCHAR(191) NULL,
    `aboutus_ru` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
