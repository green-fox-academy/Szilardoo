'use strict';

var media = document.querySelector('audio');

var playButton = document.querySelector('.play-pause');

playButton.addEventListener('click', ()=>{
  if(media.paused){
    media.play();
    playButton.setAttribute('style', 'background: url(assets/pause.svg) center no-repeat;');
  }else{
    media.pause();
    playButton.setAttribute('style', 'background: url(assets/play.svg) center no-repeat;');
  }

}, false);

const getPlaylistsDiv = document.querySelector('.playlists');
const getTracksDiv = document.querySelector('.play-musics')


const drawThings = new draw;

const communicate = new serverCommunication;

communicate.getPlaylists(drawThings.drawPlayLists, getPlaylistsDiv);
communicate.getTracks(drawThings.drawTracks, getTracksDiv, media);

var subButton = document.querySelector('.add-new-playlist');
			subButton.addEventListener('click', function(){
communicate.postToPlaylists(communicate.getPlaylists,drawThings.drawPlayLists, getPlaylistsDiv );
})



var addPlaylistBlock = document.querySelector('.invisible');
var addPlaylistButton = document.querySelector('.add');

addPlaylistButton.addEventListener('click', ()=>{
	if (addPlaylistBlock.style.display !== "inline"){
		addPlaylistBlock.style.display= 'inline';
	}else{
		addPlaylistBlock.style.display= 'none';
	}
})