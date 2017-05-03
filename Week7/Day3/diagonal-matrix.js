// - Create (dynamically*) a two dimensional list
//   with the following matrix**. Use a loop!
//
//   0 0 0 1
//   0 0 1 0
//   0 1 0 0
//   1 0 0 0
//
// - Print this two dimensional list to the console
//
// * size should depend on a variable
// ** Relax, a matrix is just like an array


var size = 4;
var size2 = size;
var zero2 = '';
var list = [];

for (var i = 1; i <= size; i++){
	size2 -=1;
	var zero = '0 ';
	for (var j = 1 ; j <= size2-1; j ++){
		zero += '0 ';
	}
	if (size2 === 0) {
			zero = '';
		}
	list.push([zero + '1' + zero2]);
	zero2 += ' 0';
}

for (var f = 0; f < list.length; f++ ){
	console.log(list[f].join())
}