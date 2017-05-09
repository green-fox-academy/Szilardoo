'use strict';

function sharpie(color,width) {
	this.color = color;
	this.width = width;
	this.inkAmount = 100;
}

var use = function (sharpie) {
	sharpie.inkAmount -= sharpie.width;
}

var sharpie1 = new sharpie('black', 5)
console.log(sharpie1)
use(sharpie1);
console.log(sharpie1)