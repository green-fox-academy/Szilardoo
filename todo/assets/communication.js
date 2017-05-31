class serverCommunication{
	getData(url, callBack, cbDelete){
		const xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);

		xhr.send('');

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			const list = JSON.parse(xhr.response);
			console.log(list);
			callBack(list, cbDelete);
			}
		}
	}

	postData(url, callBack, value, cb, cbDelete){
		const xhr = new XMLHttpRequest();

		xhr.open('POST', url, true);

		xhr.setRequestHeader('Content-Type', 'application/json');

		console.log(value);

		xhr.send(JSON.stringify({
			"text": value
		}));

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			cb(url, callBack, cbDelete);
			}
		}
	}

	deleteData(url, deleteUrl, callBack, cb, cbDelete){
		const xhr = new XMLHttpRequest();

		xhr.open('DELETE', deleteUrl, true);

		xhr.setRequestHeader('Accept', 'application/json');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send();

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			cb(url, callBack, cbDelete);
			}
		}
	}
}