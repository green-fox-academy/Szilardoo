'use strict';

var a = 3;
// make it bigger by 10
a += 10;


console.log(a);




var b = 100;
// make it smaller by 7
b -= 7;


console.log(b);




var c = 44;
// double c's value
c *= 2;

console.log(c);




var d = 125;
// divide d's value by 5
b /= 5;

console.log(d);




var e = 8;
// what's the cube of e's value?
e *= e;


console.log(e);




var f1 = 123;
var f2 = 345;
// tell if f1 is bigger than f2 (as a boolean)
var condition;
if (f1 > f2) {
	condition = true;
} else {
	condition = false;
}

console.log(condition);




var g1 = 350;
var g2 = 200;
// tell if the double of g2 is bigger than g1 (pras a boolean)
var condition2;
if (g2*2 > g1) {
	condition2 = true;
} else {
	condition2 = false;
}

console.log(condition2);




var h = 1357988018575474;
// tell if h has 11 as a divisor (as a boolean)
var condition3;
if (h % 11 === 0) {
	condition3 = true;
} else {
	condition3 = false;
}

console.log(condition3);





var i1 = 10;
var i2 = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
var condition4;
if (i1 > i2*i2 && i1< i2*i2*i2) {
	condition4 = true;
} else {
	condition4 = false;
}

console.log(condition4);




var j = 1521;
// tell if j is dividable by 3 or 5 (as a boolean)
var condition5;
if (j % 3 === 0 || j % 5 === 0) {
	condition5 = true;
} else {
	condition5 = false;
}

console.log(condition5);




var k = 'Apple';
// fill the k variable with its content 4 times

for (var i = 1; i <= 3; i ++) {
	k += 'Apple';
}


console.log(k);