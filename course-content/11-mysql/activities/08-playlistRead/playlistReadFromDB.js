var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //afterConnection();
  queryFilterConnection();
  createANewRecord();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  });
}
function queryFilterConnection() {
    connection.query("SELECT * FROM songs WHERE genre = 'Rock'", function(err, res) {
      if (err) throw err;
      for(var i=0; i< res.length; i++ ){
        // console.log(res[i].artist);
        // console.log(res[i].title);
        var genreChoice = "\n"+res[i].artist + " | " + res[i].title + " | " + res[i].genre ;
        console.log(genreChoice);
      }
      //connection.end();
    });
    connection.query("SELECT * FROM songs", function(err, res) {
        if (err) throw err;
        for(var i=0; i< res.length; i++ ){
          // console.log(res[i].artist);
          // console.log(res[i].title);
          var genreChoice = "*****************************************\n"+res[i].title + "| \n\n" ;
          console.log(genreChoice);
        }
        connection.end();
      });
  }
function createANewRecord(){
    console.log("Creating a New Song..\n")
    var query = connection.query(
        "INSERT INTO songs SET ?",
        {
            title:"I want it that way",
            artist:"Adele",
            genre:"Melody"

        },
        function(err, res){
            console.log(res.affectedRows + "New Song Inserted!\n");
            updateSong();
        }
    );
}

function updateSong(){
    console.log("updating song related stuff...\n");
    var query = connection.query(
        "UPDATE songs SET ? WHERE ?",
        [
            {
                title: "I want it that way"
            },
            {
                artist: "Adele"
            },
            function (err, res){
                console.log(res.affectedRows + "Song Updated!\n")
            }
        ]
    )
}