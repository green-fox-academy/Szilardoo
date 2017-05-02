'use strict';

var lineCount = 7;



// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

var star = '*';
var space = ' ';
var counter = lineCount/2;
var to = lineCount/2;
var pyramid = '';
if (lineCount % 2 == 1)
{
    to += 1;
}
for (var i = 1; i <= to; i++)
{
    counter -= 1;
    space = ' ';
    for (var h = 1; h <= counter+1; h++)
    {
        space += ' ';
    }
    pyramid = space + star;
    console.log(pyramid);
    star += '**';
}
var upSideDownPyramid = '';
var counter2 = lineCount;
var star2 = '';
if (counter2 % 2 == 0)
{
    counter2 += 1;
}
var space2 = ' ';
for (var j = 1; j <= lineCount/2; j++)
{
    space2 += ' ';
    star2 = '';
    counter2 -= 2;
    for (var x = 1; x <= counter2; x++)
    {
        star2 += '*';
    }
    upSideDownPyramid = space2 + star2;
    console.log(upSideDownPyramid);
}