// var add = process.argv[2] + process.argv[3];
// var subtract = process.argv[2] - process.argv[3];
// var multiply = process.argv[2] * process.argv[3];
// var division = process.argv[2] / process.argv[3];
// var remainder = process.argv[2] % process.argv[3];

var calculator = process.argv;

var operator = calculator[2];
var value1 = calculator[3];
var value2 = calculator[4];

if (operator == "add"){
    console.log (parseInt(value1)+parseInt(value2))
}
if (operator == "subtract"){
    console.log (parseInt(value1)-parseInt(value2))
}
if (operator == "multiply"){
    console.log (parseInt(value1)*parseInt(value2))
}
if (operator == "divide"){
    console.log (parseInt(value1)/parseInt(value2))
}
if (operator == "remainder"){
    console.log (parseInt(value1)%parseInt(value2))
}