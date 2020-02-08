//create variables storing a starting num
//create a primeNumber function
//we compare the values to be divisible by 1 or itself
// we print if the above condition true as "True" and "False if it isn't"

function primeChecker(number){
    for (i=2; i<number;i++){
        if (number%i===0){
            console.log("True");
        }
        else{
            console.log(i);
        }
    }
}
console.log(primeChecker(435));