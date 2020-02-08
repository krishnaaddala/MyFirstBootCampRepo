DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;
USE top_songsDB;

CREATE Top5000(
    id INTEGER(10),
    name VARCHAR (50),
    songname VARCHAR (50),
    year INTEGER(10),
    us_raw_popularity_score DECIMAL (2,3),
    uk_raw_popularity_score DECIMAL (2,3),
    europe_raw_popularity_score DECIMAL (1,1),
    restofworld_raw_popularity_score DECIMAL (1,3),
    rawscore DECIMAL (1,2)
)

bulk insert top1000Songs
from "./Top1000Songs.csv"
with 
(
    firstrow =2,
    fieldterminator =",",
    rowterminator = "\n",
    tablock 
)