// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = process.argv[2];
var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// Then create a request with axios to the queryUrl

axios.get(queryUrl).then(
    
    function(response) {
      console.log("The movie's title is: " + response.data.Title);
      console.log("The movie's title is: " + response.data.Released);

    });

//console.log(queryUrl);





// Then log the Release Year for the movie

