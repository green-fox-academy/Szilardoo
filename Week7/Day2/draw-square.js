'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%
// %   %
// %   %
// %   %
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

var space = '';
var mark = "%%";
for (var j = 1; j <= lineCount-2; j++)
{
    space += " ";
    mark += "%";
}
console.log(mark);
for (var i = 1; i <= lineCount-2; i++)
{
    console.log("%" + space + "%");
}
console.log(mark);