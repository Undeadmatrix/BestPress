DROP DATABASE IF EXISTS usersDB;
CREATE DATABASE usersDB;
USE usersDB;

CREATE TABLE users
(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    `createdAt` datetime DEFAULT NULL COMMENT 'created time',
	`updatedAt` datetime DEFAULT NULL COMMENT 'updated time',
    PRIMARY KEY (id)
);

CREATE TABLE posts (
    id int NOT NULL AUTO_INCREMENT,
    postTitle varchar(255) NOT NULL,
    postContent MEDIUMTEXT NOT NULL,
    `createdAt` datetime DEFAULT NULL COMMENT 'created time',
	`updatedAt` datetime DEFAULT NULL COMMENT 'updated time',
    PRIMARY KEY (id)
);