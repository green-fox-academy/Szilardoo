'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function moreThanFoure(list) {
	var names = [];
	for (var i = 0; i < list. length; i++){
		if (list[i]['candies'] > 4) {
			names.push(list[i]['name']);
		}
	}
	return names;
}

console.log(moreThanFoure(students));

function candyAverage(list) {
	var candies = 0;
	for (var i = 0; i < list.length; i++) {
		candies += list[i]['candies'];
	}
	return candies/list.length;
}

console.log(candyAverage(students));