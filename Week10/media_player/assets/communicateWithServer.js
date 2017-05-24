
class serverCommunication{

	getPlaylists(cb, holderDiv){

		var url = 'http://localhost:3000/playlists';
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
}
