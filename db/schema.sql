DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE user
(
    id int NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    PRIMARY KEY (id)
);
-- possible columns, first_name, last_name, email, username, pass.--