
class serverCommunication{

	getDataFromServer(cb, data, url){

		var xhr = new XMLHttpRequest();


		xhr.open('GET', url, true);

		xhr.setRequestHeader('Accept', 'application/json');

		xhr.send('');

		var list;

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
		  list = JSON.parse(xhr.response);
		  console.log(list);
		  cb(list, data)
			}
		}
	}

	postToPlaylists(cb, cback, holderDiv, title){
		const url = 'http://localhost:3000/playlists';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('POST', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.setRequestHeader('Content-Type', 'application/json')

		xhrSend.send(JSON.stringify({
			  "title": title.value,
			}));

		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			cb(cback, holderDiv)
				}
			}
	}
}
