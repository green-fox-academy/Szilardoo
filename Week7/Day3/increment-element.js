'use strict';
// - Create a variable named `t` with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

var t = [1, 2, 3, 4, 5];

var increase =  t.map(function(el, i){
	return ( i === 2)  ? el +5 : el;
})

console.log(increase[2]);