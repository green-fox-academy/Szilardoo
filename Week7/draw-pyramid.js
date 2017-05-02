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
var star = "*";
var space = " ";
var counter = lineCount;
for (var i = 1; i <= lineCount; i++)
{
    counter -= 1;
    for (var h = 1; h <= counter; h++)
    {
        process.stdout.write(space)
    }
    console.log(star)
    star += "**";
}