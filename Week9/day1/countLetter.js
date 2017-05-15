function countLetter(string){
	list_string = string.toString().split('');
	object = {};
	list_string.forEach(function(element){
		if(element in object){
			object[element] += 1;
		}else {
			object[element] = 1;
		}
	})
	return object;
}


module.exports = countLetter;