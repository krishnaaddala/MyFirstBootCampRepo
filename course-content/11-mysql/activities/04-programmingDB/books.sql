CREATE DATABASE books_db;

CREATE TABLE books(
    id INTEGER(10) AUTO_INCREMENT,
    title VARCHAR(50),
    PRIMARY KEY(id)
);

INSERT INTO books(title)
VALUES ("Chamber of secrets");

INSERT INTO books(title)
VALUES ("TRAILBLAZER");

INSERT INTO books(title)
VALUES ("Philosopher's Stone");

INSERT INTO books(title)
VALUES ("Javascript for Dummies");

-- update the data for a specific ID after inserting values and you want to change one of the values created 
UPDATE books
SET title = "Crouching Tiger Hidden Dragon"
WHERE id = 2

CREATE TABLE authors(
    id INTEGER(10) AUTO_INCREMENT,
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    PRIMARY KEY (id)
);

INSERT INTO authors(firstName, lastName)
VALUES ("Krishna", "Addala");
INSERT INTO authors(firstName, lastName)
VALUES ("Saitama", "OnePunchMan");
INSERT INTO authors(firstName, lastName)
VALUES ("Luffy", "Dragon");
INSERT INTO authors(firstName, lastName)
VALUES ("Naruto", "Uzumaki");
INSERT INTO authors(firstName, lastName)
VALUES ("Midoria", "Izuku");
INSERT INTO authors(firstName, lastName)
VALUES ("Goku", "Son");

UDPATE authors
SET lastName = "Superman"
WHERE id = 1;