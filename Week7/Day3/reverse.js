'use strict';
// - Create a variable named `aj`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Reverse the order of the elements in `aj`
// 		- do it with the built in method
//		- do it with creating a new temp array and a loop
// - Print the elements of the reversed `aj`


var aj = [3, 4, 5, 6, 7];

function reverse(list) {
	var reversedList = [];
	for (var i = 0; i < list.length; i++){
		reversedList.unshift(list.pop());
	}
	return reversedList;
}

console.log()