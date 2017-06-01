class serverCommunication{
	getData(url, callBack, cbDelete, completed){
		const xhr = new XMLHttpRequest();

		xhr.open('GET', url, true);

		xhr.send('');

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			const list = JSON.parse(xhr.response);
			console.log(list);
			callBack(list, cbDelete, completed);
			}
		}
	}

	postData(url, callBack, value, cb, cbDelete, completed){
		const xhr = new XMLHttpRequest();

		xhr.open('POST', url, true);

		xhr.setRequestHeader('Content-Type', 'application/json');

		console.log(value);

		xhr.send(JSON.stringify({
			"text": value
		}));

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			cb(url, callBack, cbDelete, completed);
			}
		}
	}

	deleteData(url, deleteUrl, callBack, cb, cbDelete, completed){
		const xhr = new XMLHttpRequest();

		xhr.open('DELETE', deleteUrl, true);

		xhr.setRequestHeader('Accept', 'application/json');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send();

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			cb(url, callBack, cbDelete, completed);
			}
		}
	}

	putData(url, putUrl, callBack, cb, cbDelete, completed){
		const xhr = new XMLHttpRequest();

		xhr.open('PUT', putUrl, true);

		console.log(putUrl);

		xhr.setRequestHeader('Accept', 'application/json');
		xhr.setRequestHeader('Content-Type', 'application/json');

		xhr.send();

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
			cb(url, callBack, cbDelete, completed);
			}
		}
	}
}