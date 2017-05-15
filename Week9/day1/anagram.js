'use strict';

function anagram(string1, string2){
	if(string1.split('').sort().join('') === string2.split('').sort().join('')){
		return true;
	}else {
		return false;
	}
}

module.exports = anagram;