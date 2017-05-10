'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

var numberOfE = fruits.map(function(element){
	var counter = 0;
	for(var i = 0; i < element.length; i++){
		if (element[i] === 'e'){
			counter += 1;
		}
	}
	return counter;
})

console.log(numberOfE);


// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.