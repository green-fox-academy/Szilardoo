'use strict';

var heading = document.querySelector('h1');

alert(heading.innerHTML);

var firstParagraph = document.getElementsByTagName('p')[0];

console.log(firstParagraph.innerHTML)

var secondParagraph = document.getElementsByClassName("other")[0];

alert(secondParagraph.innerHTML);

heading.textContent = 'New content';

var lastParagraph = document.getElementsByClassName("result")[0];

lastParagraph.innerHTML = firstParagraph.innerHTML;