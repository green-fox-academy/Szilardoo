function drawMatrix(num){
  const size = num;
  let size2 = size;
  let result = [];
  let zero2 = '';

  for (var i = 1; i <= size; i++){
  	size2 -=1;
    let zero = '';
  	for (var j = 1 ; j <= size2; j ++){
  		zero += ' 0';
  	}
  	result.push([zero2 + '1' + zero + '\n']);
  	zero2 += '0 ';
  }
  return result.join('');
}

console.log(drawMatrix(5));
