function fibonacci(num) {
	if(typeof num === 'number' && parseInt(num) === num){
		if( num === 0) {
			return num;
		}
		if( num <= 2 && num > 0) {
			return 1;
		}else {
		return fibonacci(num-1) + fibonacci(num-2)
		}
	}else {
		return 'Incorrect number';
	}
}
module.exports = fibonacci;