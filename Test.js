var x = 5;
var y = 9;


var r = y ^ ((x ^ y) & -(x < y));//min

console.log(r);

var r = x ^ ((x ^ y) & -(x < y));//max

console.log(r);