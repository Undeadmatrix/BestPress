DROP DATABASE IF EXISTS bestpress;
CREATE DATABASE bestpress;
USE bestpress;

CREATE TABLE IF NOT EXISTS `Authors` 
(
    `id` INTEGER NOT NULL auto_increment ,
    `firstName` VARCHAR(255),
    `lastName` VARCHAR(255),
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `Posts` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255) NOT NULL, `body` TEXT NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `AuthorId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`AuthorId`) REFERENCES `Authors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE);
