-- Drops the favorite_db if it exists currently --
DROP DATABASE IF EXISTS favorite_db;
-- Creates the "favorite_db" database --
CREATE DATABASE favorite_db;

-- Make it so all of the following code will affect favorite_db --

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
  -- Make a string column called "food" which cannot contain null --
  food VARCHAR(30) NOT NULL,
  -- Make an numeric column called "score" --
  score INTEGER(10)
);
INSERT INTO favorite_foods(food, score)
VALUES ("Ethiopian", 10);
INSERT INTO favorite_foods(food, score)
VALUES ("Mexican", 8);
INSERT INTO favorite_foods(food, score)
VALUES ("Indian", 8);

INSERT INTO favorite_songs(song, artist, score)
VALUES ("It's My Life...!", "Bon Jovi", 10);
INSERT INTO favorite_songs(song, artist, score)
VALUES ("Hello!", "Adele", 9);
INSERT INTO favorite_songs(song, artist, score)
VALUES ("Linkin Park", "Linkin Park", 10);

INSERT INTO favorite_movies(movie, five_times, score)
VALUES ("Harry Potter", TRUE, 10);
INSERT INTO favorite_movies(movie, five_times, score)
VALUES ("Man Of Steel", TRUE, 10);
INSERT INTO favorite_movies(movie, five_times, score)
VALUES ("Fast n Furious", TRUE, 10)

CREATE TABLE favorite_songs (
  -- Make a string column called "song" which cannot contain null --
 song VARCHAR(30),
 -- Make a string column called "artist" --
 artist VARCHAR(30),
  -- Make an integer column called "score" --
  score INTEGER(10)
);

CREATE TABLE favorite_movies (
  -- Create a numeric column called "id" which automatically increments and cannot be null --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "movie" which cannot be null --
  movie VARCHAR(30) NOT NULL
  -- Create a boolean column called "five_times" that sets the default value to false if nothing is entered --
  five_times BOOLEAN NOT NULL default 0,
  -- Make an integer column called "score" --
  score INTEGER(10),
  -- Set the primary key of the table to id --
  PRIMARY KEY(id)
);
