//assign 3 variable one that start's with 1, and one which has an assigned value of 3 and the other assigned value of 5
var x =1;
var y= 3;
var z = 5;
function fizzBuzz(){
//iterate that variable from 1 to 100 within a loop
for (i=0; i<=100; i++){
//everytime we match multiples of 3 we print fizz
if (i%y === 0){
    console.log("Fizz");
}
//everytime we match multiples of 5 we print buzz
else if (i%z === 0){
    console.log("Buzz");
}
//everytime we match multiples of 3 & 5 we print fizzbuzz
else if (i%y===0 && i%z===0){
    console.log("FizzBuzz")
}
//if there is no match then print out the number 
else{
    console.log(i);
}
}
}
fizzBuzz();
