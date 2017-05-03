'use strict';
// - Create a variable named `ai` with the following content: `[3, 4, 5, 6, 7]`
// - Log the sum of the elements in `ai` to the console

var ai = [3, 4, 5, 6, 7];

function sumElements(list){
	var sumList = 0;
	for (var i = 0; i < list.length; i++){
		sumList += list[i];
	}
	return sumList;
}

console.log(sumElements(ai))