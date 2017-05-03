'use strict';
// - Create a function called `printer`
//   which logs to the console the input parameters
//   (can have multiple number of arguments)


function printer(x) {
	for (var i = 1; i <= arguments.length; i++) {
		console.log(arguments[i]);
	}
	
}

printer(1,2,3,4,5,5,6)