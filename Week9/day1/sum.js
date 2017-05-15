function sum(list){
	var sum = 0;
	try{
		list.forEach( function(element) {
			if (typeof element === 'number'){
				sum += element;
			}
		})
	}catch(err){
		return sum;
	}
	return sum;
}

module.exports = sum;