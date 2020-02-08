var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //afterConnection();
  queryFilterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    console.log(res);

    connection.end();
  });
}
function queryFilterConnection() {
  connection.query("SELECT * FROM songs WHERE genre = ?",['Rock'], function(err, res) {
    if (err) throw err;
    for(var i=0; i< res.length; i++ ){
      console.log(res[i].artist);

    }

    connection.end();
  });
}
