//POST AN ITEM
//BID AN ITEM
var inquirer = require("inquirer");
var highbid = 0;
function userOptions(){
    inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
        type: "list",
        message: "Choose what you want to do? Post Item Or Bid Item ",
        choices:["Post Item", "Bid Item"],
        name: "userChoice"
    }
  ]).then (function(userResponse){
      console.log("******************************")
      console.log(userResponse)
      console.log(userResponse.userChoice)
      if (userResponse.userChoice === "Post Item"){
        postItem();
      }
      else{
        bidItem();
      }
  })
  
}
userOptions();

function bidItem(){

// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "list",
      message: "What is the task you want to bid on?",
      choices: ["toys", "books", "movies", "clothes"],
      name: "bidName"
    },


    // Here we create a basic password-protected text prompt.
    {
      type: "input",
      message: "What's your starting bid?",
      name: "userBid"
    }
  ])
  .then(function(inquirerResponse) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's userBid and bidName from the answers.
    console.log("Your Bid has been posted successfully")
    //   console.log("\nWelcome " + inquirerResponse.bidName);
    //   console.log(" " + inquirerResponse.userBid + " !\n");
      if (inquirerResponse.userBid > highbid){
          console.log ("You have the highest bid!");
      }
      else{
          console.log("You did not outbid the higest bid placed on this item!");
      }
     });
}

function postItem(){

    // Create a "Prompt" with a series of questions.
    inquirer
      .prompt([
        // Here we create a basic text prompt.
        {
          type: "input",
          message: "What is the item you would like to submit?",
          name: "itemChoice"
        },
        // Here we create a basic password-protected text prompt.
        {
          type: "input",
          message: "What category you would like to place your auction in?",
          name: "inputCategory"
        },
        // Here we give the user a list to choose from.
        {
          type: "input",
          message: "What would your starting bid like to be?",
          name: "postInitialBid"
        }
      ])
      .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        console.log("Your post has been updated successfully!")

        // console.log(inquirerResponse)
        
        //   console.log("\You Chose to post: " + inquirerResponse.itemChoice);
        //   console.log(" " + inquirerResponse.inputCategory + " !\n");
        //   console.log(" " + inquirerResponse.postInitialBid + " !\n");

          
      });
    }