
'use strict';

var lineCount = 6;


// Write a program that draws a
// square like this:
//
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is

var space = '';
var mark = '%%';
var secondSpace;
var numberSpace = lineCount;
var space2 = '';
for (var j = 1; j <= lineCount-2; j++)
{
    mark += '%';
}
console.log(mark);
for (var i = 1; i <= lineCount-2; i++)
{
    space2 = '';
    for (var h = 1; h <= numberSpace-3; h++)
    {
        space2 += ' ';
    }
    console.log('%' + space + '%' + space2+'%');
    numberSpace -= 1;
    space += ' ';
}
console.log(mark);