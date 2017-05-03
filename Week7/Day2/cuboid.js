'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

var aSide = 10;
var bSide = 10;
var cSide = 10;

var surfaceArea = 2*(aSide*bSide + aSide*cSide + cSide*bSide);
var volume = aSide * bSide * cSide;

console.log(surfaceArea);
console.log(volume);