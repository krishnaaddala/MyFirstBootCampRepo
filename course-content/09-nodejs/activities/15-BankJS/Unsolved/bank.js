var fs = require("fs");
​
var action = process.argv[2];
var newText = parseFloat(process.argv[3]);
var winning = "";
​
var sum = 0;
​
​
switch(action){
    case "total":
            fs.readFile("bank.txt","utf8", function(err, data){
                if (err) {
                    return console.log(err);
                  }
                // Then split it by commas (to make it more readable)
                  var dataArr = data.split(",");
                  
                  // We will then re-display the content as an array for later use.
                  for (i = 0; i < dataArr.length; i++){
                        //add all elements in the dataArr array
                        sum += parseFloat(dataArr[i]);
                    }
                  console.log(sum.toFixed(2));
            });
            break;
    case "deposit":
            fs.appendFile("bank.txt", ", "+newText, function(err){
                if (err) {
                    console.log(err);
                  }
                
                  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                  else {
                    console.log("Content Added!");
                  }
                
            });
            break;
    case "withdraw":
            fs.appendFile("bank.txt", ", "+newText*-1, function(err){
                if (err) {
                    console.log(err);
                }          
                  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
                else {
                    console.log("Content Added!");
                }
                
            });
            break;
     case "lotto":
            fs.appendFile("bank.txt", ", " + -2, function(err) {
                // If the code experiences any errors it will log the error to the console. 
                var rand1 = Math.floor((Math.random() * 10) + 1);
                console.log("Your number: " + rand1);
                var rand2 = Math.floor((Math.random() * 10) + 1);
                console.log("Computer generated number: "+ rand2);
                //Throw error if there's error
                if (err) {
                  return console.log(err);
                }
                //Condition if random number 1 = 2
                if (rand1 === rand2){
                    //Winning amount is 1000
                    winning = "1000";
                    //call appendfile function for adding the winnings ONLY if rand1 === rand2
                    fs.appendFile("bank.txt", ", " + winning, function(err) {
                        //error handling
                        if (err) {
                            return console.log(err);
                        }                     
                        console.log("lottery winner!");
                    });
                }
                else{
                    console.log("oops better luck next time");
                }
              
              });
           
            break;
              
​
}