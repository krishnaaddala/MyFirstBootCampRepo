//|| operator
//When using || operator, if the value to the left 
//of the operator is evaluated as truthy, 
//that value is returned and the value on the right is thrown away. 
//If the value on the left of the operator is evaluated as falsey, 
//the value on the right is evaluated and returned whether it's truthy or not.

//&& operator
//When using the && operator, 
//if the value on the left is evaluated as falsey 
//it is returned and the value on the right is thrown away. 
//If the value on the left is evaluated as truthy, 
///the value on the right is evaluated and returned, 
//whether it's truthy or not.

//i.e. 0, null, undefined, "", are all empty/nonexistent values.

// 1.
console.log(true || false);//true
console.log(true && false);//false
console.log(0 && "lol");//0
console.log(false || "IDK MY BFF JILL");//"IDK MY BFF JILL"

// 2.
console.log("" && [].length);//'' => empty string is falsey
console.log("" || [].length);//0 => evaluates both returns second false statement
console.log("" || [].length || 0);//0 0 => evaluates both returns third false statement


// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);//Cheeseburger

// 4.
const feelingWell = false;
const goingOutTonight = feelingWell ? "Of course I'm going!" : "Not tonight, I'm not feeling well.";
console.log(goingOutTonight);//Not tonight, I'm not feeling well.




