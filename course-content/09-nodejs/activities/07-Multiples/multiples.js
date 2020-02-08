var value1 = process.argv[2];
// do the value2 which starts with 0
var sum = 0;

for (i=0; i< value1; i++){
    if (i%6 ===0)
    sum = sum+i;
}
console.log(sum);