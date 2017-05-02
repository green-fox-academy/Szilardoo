'use strict';

var lineCount = 4;

// Write a program that draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is
var star = '*';
var space = ' ';
var counter = lineCount;
var pyramid = '';
for (var i = 1; i <= lineCount; i++)
{
    counter -= 1;
    space = ' ';
    for (var h = 1; h <= counter; h++)
    {
        space += ' ';
    }
    pyramid = space + star;
    console.log(pyramid);
    star += "**";
}