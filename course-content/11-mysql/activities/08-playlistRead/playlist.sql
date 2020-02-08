DROP DATABASE IF EXISTS playlist_db;

Create database playlist_db;
use playlist_db;

create table songs(
    id INTEGER(10) AUTO_INCREMENT,
    title VARCHAR(30),
    artist VARCHAR(30),
    genre VARCHAR(30),
    PRIMARY KEY(id)
);

INSERT INTO songs(title, artist, genre)
VALUES ("It's my life","Bon Jovi", "SoftRock")

INSERT INTO songs(title, artist, genre)
VALUES ("Thriller","Michael Jackson", "Pop")

INSERT INTO songs(title, artist, genre)
VALUES ("Rumours","Fleet Wood Mac", "Rock")

INSERT INTO songs(title, artist, genre)
VALUES ("Perfect","Ed Sheeren", "SoftRock")

INSERT INTO songs(title, artist, genre)
VALUES ("Senorita","Sean mendes", "Rock")

INSERT INTO songs(title, artist, genre)
VALUES ("Old Town Road - Remix","Billy Ray Cyrus", "pop")

