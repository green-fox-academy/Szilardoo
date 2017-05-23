'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference


class Rectangles{
	constructor(sideA, sideB){
		this.sideA = sideA;
		this.sideB = sideB;
	}

	getArea(){
		return this.sideA*this.sideB;
	}

	getCircumference(){
		return 2*(this.sideA+this.sideB);
	}

}

var myRectangle = new Rectangles(10, 5);
console.log('Area = ' + myRectangle.getArea() + ' circumference = ' + myRectangle.getCircumference());

//----------------------------------------------------------

function Rectangles2(sideA, sideB) {
	this.sideA = sideA;
	this.sideB = sideB;
}

Rectangles2.prototype.getArea = function() {
	return this.sideA*this.sideB;
}

Rectangles2.prototype.getCircumference = function() {
	return 2*(this.sideA+this.sideB);
}

var myRectangle2 = new Rectangles2(10, 5);
console.log('Area = ' + myRectangle2.getArea() + ' circumference = ' + myRectangle2.getCircumference());