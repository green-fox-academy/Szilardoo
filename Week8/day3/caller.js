'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8

function selectLastEvenNumber(array, cb) {
	var list = [];
	var num = 0;
	array.forEach(function(element){
		if(element % 2 === 0){
			list.push(element);
		}
	})
	num = list.pop();
	return printNumber(num);
} 