// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your name? ",
      name: "Name"
    },
    {
        type: "password",
        message: "Enter your password: ",
        name: "password"
      },
      {
        type: "list",
        message: "Why are you here?",
        choices: ["Kill John Connor", "Save John Connor", "Just cause... I said I'll be back!"],
        name: "Terminatorchoice"
      },
      {
        type: "checkbox",
        message: "What now???",
        choices: ["Get me a chain gun!", "Get me sledge hammer", "Asta la vista BABY!!!"],
        name: "Terminatorsays"
      },
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      }
  ])
  .then (function (terminatorResponse){
    if (terminatorResponse.confirm) {
        console.log("\nWelcome " + terminatorResponse.Name);
        console.log("\Password you entered is:  " + terminatorResponse.password);
        if (terminatorResponse.Terminatorchoice === "Kill John Connor"){
            console.log(terminatorResponse.Name + " are you here for Kill John Connor??? What's wrong with you!!!\n")
        }
        else if(terminatorResponse.Terminatorchoice === "Save John Connor"){
            console.log(terminatorResponse.Name + " are you here for save John Connor? Thank you! for coming from the future to save him!!!\n")
        }
        else if(terminatorResponse.Terminatorchoice === "Just cause... I said I'll be back!"){
            console.log(terminatorResponse.Name + " are you here Just cause... You said I'll be back! Don't you have anything else to do than keep coming back? Over and over again!!!\n")
        }
        //console.log(terminatorResponse.Name + " are here for? " + terminatorResponse.Terminatorchoice + " !\n");
        console.log("Your " + terminatorResponse.Name +  terminatorResponse.Terminatorsays + " is ready for battle!\n");

      }
      else {
        console.log("\nNever Mind... " + terminatorResponse.name + ", You Can be BACK! another time in a another teminator movie part.\n");
      }
    });
