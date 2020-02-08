-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(10) AUTO_INCREMENT,
  -- Create a string column called "language" --
  language VARCHAR(30),
  -- Create an integer column called "rating" --
  rating INTEGER(10)
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN NOT NULL default TRUE,
  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("English", 10, TRUE);
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("Hindi", 9);
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("Mandarin", 8);
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("Spanish", 10, TRUE);
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("French", 7, TRUE);
INSERT INTO programming_languages(language, rating, mastered)
VALUES ("English-UK", 9)

INSERT INTO programming_languages(language, rating)
VALUES ("Telugu", 7);
INSERT INTO programming_languages(language, rating)
VALUES ("Thai", 9)


CREATE TABLE programmers(
  id INTEGER(10) AUTO_INCREMENT,
  firstName VARCHAR(30),
  lastName VARCHAR(30),
  PRIMARY KEY(id)
)

INSERT INTO programmers(firstName, lastName)
VALUES ("Krishna", "Addala");
INSERT INTO programmers(firstName, lastName)
VALUES ("Saitama", "OnePunchMan");
INSERT INTO programmers(firstName, lastName)
VALUES ("Luffy", "Dragon");
INSERT INTO programmers(firstName, lastName)
VALUES ("Naruto", "Uzumaki");
INSERT INTO programmers(firstName, lastName)
VALUES ("Midoria", "Izuku");
INSERT INTO programmers(firstName, lastName)
VALUES ("Goku", "Son");
