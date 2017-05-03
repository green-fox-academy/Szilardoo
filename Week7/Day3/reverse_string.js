'use strict';
// Reverse the string!

var reversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI"

function reverseString(string) {
	var result = ''
	for (var i = string.length-1; i >= 0; i--){
		result += string[i];
	}
	return result;
}

console.log(reverseString(reversed))