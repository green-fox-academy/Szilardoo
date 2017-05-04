'use strict';

var king = document.getElementById('b325');

console.log(king);

var conceited = document.getElementsByTagName('div')[0];

alert(conceited);

var businessLamp = document.querySelectorAll('.big');

console.log(businessLamp[0]);
console.log(businessLamp[1]);

var conceitedKing = document.querySelectorAll("section div");

alert(conceitedKing[0]);
alert(conceitedKing[1]);

var noBusiness = document.getElementsByTagName("div");

for ( var i = 0; i < noBusiness.length; i++) {
	console.log(noBusiness[i]);
}

var allBizniss = document.querySelector('p.asteroid.big');

console.log(allBizniss);