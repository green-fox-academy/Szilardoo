
'use strict';

var students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
]

// create a function that takes a list of students and logs: 
// - how many candies are owned by students

// create a function that takes a list of students and logs:
// - Sum of the age of people who have lass than 5 candies

function candyCounter(object) {
	var counter = 0;
	for (var i = 0; i <= object.length-1; i++) {
		counter += object[i]['candies'];
	}
	return counter;
}

console.log(candyCounter(students));

function ageSum(object) {
	var counter = 0;
	for (var i = 0; i <= object.length-1; i++) {
		if(object[i]['candies'] < 5 ) {
			counter += object[i]['age'];
		}
	}
	return counter;
}

console.log(ageSum(students));
