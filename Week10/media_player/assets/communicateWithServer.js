
class serverCommunication{

	getPlaylists(cb, holderDiv){

		const url = 'http://localhost:3000/playlists';
		var xhr = new XMLHttpRequest();


		xhr.open('GET', url, true);

		xhr.setRequestHeader('Accept', 'application/json');

		xhr.send('');

		var list;

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
		  list = JSON.parse(xhr.response);
		  console.log(list);
		  cb(list, holderDiv)
			}
		}
	}

	getTracks(cb, trackDiv, audio){

		const url = 'http://localhost:3000/playlist-track';
		var xhr = new XMLHttpRequest();


		xhr.open('GET', url, true);

		xhr.setRequestHeader('Accept', 'application/json');

		xhr.send('');

		var list;

		xhr.onreadystatechange = function(){
		if (xhr.readyState === XMLHttpRequest.DONE) {
		  list = JSON.parse(xhr.response);
		  console.log(list);
		  cb(list, trackDiv, audio)
			}
		}
	}

	postToPlaylists(cb, cback, holderDiv){
		var url = 'http://localhost:3000/playlists';
		var xhrSend = new XMLHttpRequest();

		xhrSend.open('POST', url, true);

		xhrSend.setRequestHeader('Accept', 'application/json')
		xhrSend.setRequestHeader('Content-Type', 'application/json')

	
		var title = document.querySelector(".add-playlist");
		var titleValue = title.value;
		xhrSend.send(JSON.stringify({
			  "title": titleValue,
			}));

		xhrSend.onreadystatechange = function(){
		if (xhrSend.readyState === XMLHttpRequest.DONE) {
			cb(cback, holderDiv)
				}
			}
	}
}
