// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ========================================================================================================================

// Include the node-geocoder NPM package (Remember to run "npm install node-geocoder"!)
var NodeGeocoder = require("node-geocoder");

// Replace with your mapquest consumer API key
var options = {
  provider: "mapquest",
  apiKey: "0Zk3KpV49IkYxX1gAcQVqqucbBMFLib2"
};

// Create a geocoder object that can query the mapquest API
var geocoder = NodeGeocoder(options);
//console.log(geocoder);


// Take in the command line arguments
var geoLocation = process.argv[2];


// Build your address as an array or string
// var input = "" + geoLocation + "";
// console.log(geoLocation);
geocoder.geocode(geoLocation, function(err, result) {
  //console.log(result);
  console.log (JSON.stringify(result, null, 2));
});

// Then use the geocoder object to search the address
//console.log (JSON.stringify(result, null, 2));