'use strict';

var media = document.querySelector('audio');

var playButton = document.querySelector('.play-pause');

playButton.addEventListener('click', ()=>{
  if(media.paused)
  {
    media.play();
    playButton.setAttribute('style', 'background: url(assets/pause.svg) center no-repeat;');
  }
  else
  {
    media.pause();
    playButton.setAttribute('style', 'background: url(assets/play.svg) center no-repeat;');
  }

}, false);

var getPlaylistsDiv = document.querySelector('.playlists');

var communicate = new serverCommunication;

communicate.getPlaylists(drawPlaylists, getPlaylistsDiv);


//-------------------------------------------------------------------

function drawPlaylists(playlists, div){

	for(let i = 0; i < playlists.length; i++){
		var newPlaylist = document.createElement('div');
		newPlaylist.className = 'playlist-elements';
		newPlaylist.textContent = playlists[i].title;
		div.appendChild(newPlaylist);
	}
}



/*function getTracks(){

	var url = 'http://localhost:3000/playlist-track';
	var xhr = new XMLHttpRequest();


	xhr.open('GET', url, true);

	xhr.setRequestHeader('Accept', 'application/json');

	xhr.send('');

	var list;

	xhr.onreadystatechange = function(){
	if (xhr.readyState === XMLHttpRequest.DONE) {
	  list = JSON.parse(xhr.response);
	  console.log(list);
		}
	}
}*/
