function sum(list){
	var sum = 0;
	try{
		list.forEach( function(element) {
			sum += element;
		})
	}catch(err){
		return sum;
	}
	return sum;
}

module.exports = sum;