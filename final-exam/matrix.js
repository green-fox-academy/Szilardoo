'use strict';

function join(array, letter) {
  let joinedList = '';
  for(let i = 0; i < array.length; i++){
    joinedList += array[i];
  }
  return joinedList;
}

function drawMatrix(num){
  const matrixSize = num;
  let sizeRightZeros = matrixSize;
  let matrix = [];
  let zerosLeft = '';

  for (let i = 1; i <= matrixSize; i++){
  	sizeRightZeros -=1;
    let zerosRight = '';
  	for (let j = 1 ; j <= sizeRightZeros; j ++){
  		zerosRight += ' 0';
  	}
  	matrix.push([zerosLeft + '1' + zerosRight + '\n']);
  	zerosLeft += '0 ';
  }
  return join(matrix, '');
}

console.log(drawMatrix(7));
