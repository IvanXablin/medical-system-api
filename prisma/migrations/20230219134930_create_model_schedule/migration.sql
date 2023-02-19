-- CreateTable
CREATE TABLE `Schedule` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `doctorId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `timeFrom` DATETIME(3) NOT NULL,
    `timeTo` DATETIME(3) NOT NULL,
    `isFree` BOOLEAN NOT NULL,
    `patientId` INTEGER NOT NULL,
    `isRepeatAppointment` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
