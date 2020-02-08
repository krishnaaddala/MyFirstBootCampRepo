var bestThings = require ("bestThings");

bestThings.readFile("best_things_ever.txt", "utf8", function(error, data){
    if (error){
        return console.log(error)
    }
   console.log(data)
   var dataNext = data.split(",");
//use for loop to itereate thru this array and print on separate line
});
