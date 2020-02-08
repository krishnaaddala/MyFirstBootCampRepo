DROP DATABASE IF EXISTS popquiz_db;
CREATE DATABASE popquiz_db;
USE popquiz_db;

CREATE TABLE quiz(
    id INTEGER(10) NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    bidValue INTEGER(10)
);

INSERT INTO quiz(name, bidValue)
VALUES ("Krishna", 100);

INSERT INTO quiz(name, bidValue)
VALUES ("Jerome", 1000);

INSERT INTO quiz(name, bidValue)
VALUES ("Roger", 900);