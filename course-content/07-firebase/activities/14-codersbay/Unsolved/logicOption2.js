// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCiaRAi4jnAxnFHFzJdVVuT7uHiUGiwB8w",
    authDomain: "demoonline-krishna.firebaseapp.com",
    databaseURL: "https://demoonline-krishna.firebaseio.com",
    projectId: "demoonline-krishna",
    storageBucket: "demoonline-krishna.appspot.com",
    messagingSenderId: "559780517830",
    appId: "1:559780517830:web:da0ec5e53fce69511044c7",
    measurementId: "G-1WRHY8Q156"
  };
  firebase.initializeApp(firebaseConfig);

// Make sure to match the configuration to the script version number in the HTML
// (Ex. 3.0 != 3.7.0)

// Assign the reference to the database to a variable named 'database'
 var database = firebase.database();


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

//  At the page load and subsequent value changes, get a snapshot of the stored data.
// This function allows you to update your page in real-time when the firebase database changes.
database.ref().on("value", function(snapshot) {

    // If Firebase has a highPrice and highBidder stored (first case)
    if(snapshot.hasChild("highPrice") && snapshot.hasChild("highBidder"))   {
        
        // Set the variables for highBidder/highPrice equal to the stored values in firebase.
        highPrice = parseInt(snapshot.val().highPrice);
        highBidder = snapshot.val().highBidder;

        // Change the HTML to reflect the stored values
        $("#highest-price").text(highPrice);
        $("#highest-bidder").text(highBidder);

        // Print the data to the console.
        console.log(snapshot.val());
    }
    
    // Else Firebase doesn't have a highPrice/highBidder, so use the initial local values.
    else {
        
        database.ref().set({
            highPrice: highPrice,
            highBidder: highBidder
        });
        // Change the HTML to reflect the initial values
        // $("#highest-price").text(snapshot.val().highPrice);
        // $("#highest-bidder").text(snapshot.val().highBidder);

        // Print the data to the console.
        // console.log(snapshot.val());
    }

});


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(){
    
    // prevent form from submitting with event.preventDefault() or returning false
    event.preventDefault();

    // Get the input values
    var bidder = $("#bidder-name").val().trim();
    var price = parseInt($("#bidder-price").val().trim());

    // Log the Bidder and Price (Even if not the highest)
    console.log(bidder);
    console.log(price);
    
    // If Then statements to compare against previous high bidder
    if (price > highPrice) {
        
        // Alert that they are High Bidder
        alert("Congratulations! You are the highest bidder!!!");
        
        // Save the new price in Firebase
        database.ref().set({
            highPrice: price,
            highBidder: bidder
        });

        // Log the new High Price
        console.log("The highest bid is: " + price);
        
        // Store the new high price and bidder name as a local variable (could have also used the firebase variable)
        
        
        // Change the HTML to reflect the new high price and bidder
        // $("#highest-price").text(price);
        // $("#highest-bidder").text(bidder);
    }

// Else tell user their bid was too low via alert
    else {
        alert("Your bid is too low! :(");
    }

});