'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds


function printApple(){
	console.log('appple');
}

function printPear(){
	console.log('pear');
}

function printMelon(){
	console.log('melon');
}

function printGrapes(){
	console.log('grapes');
}

printApple();
setTimeout(printPear, 1000);
setTimeout(printMelon, 3000);
setTimeout(printGrapes, 5000);