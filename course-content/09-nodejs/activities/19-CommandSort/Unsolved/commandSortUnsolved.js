// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================
var sortNum = [];
var num1 = process.argv;

for (var i=2; i<num1.length; i++){
    sortNum.push(parseFloat(num1[i]));
    // console.log(sortNum.push(parseFloat(num1[i])));
}
sortNum.sort(function(a,b) {return a-b});
console.log(sortNum);
