class serverCommunication{
	getData(url, callBack){
		const xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);

		xhr.send('');

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			const list = JSON.parse(xhr.response);
			console.log(list);
			callBack(list);
			}
		}
	}
}