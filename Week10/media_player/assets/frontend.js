'use strict';

class main {
	constructor(){
		this.getPlaylistsDiv = document.querySelector('.playlists');
		this.getTracksDiv = document.querySelector('.play-musics');
		this.media = document.querySelector('audio');
		this.playButton = document.querySelector('.play-pause');
		this.musicTitle = document.querySelector('.music-name');

		this.drawThings = new draw;

		this.communicate = new serverCommunication;
		this.tracks = new serverCommunication;


		this.addButton = document.querySelector('.add-new-playlist');
		this.title = document.querySelector(".add-playlist");

		this.addPlaylistBlock = document.querySelector('.invisible');
		this.addPlaylistButton = document.querySelector('.add');

		this.events();
		this.drawingPlaylist();
		this.drawingTracks();

	}

	drawingPlaylist(){
		this.urlPlaylist = 'http://localhost:3000/playlists'
		this.communicate.getDataFromServer(this.drawThings.drawPlayLists.bind(this.drawThings), this.getPlaylistsDiv, this.urlPlaylist);
	}

	drawingTracks(){
		this.trackUrl = 'http://localhost:3000/playlist-track';

		this.drawTrackObject = {
			div :this.getTracksDiv, 
			media: this.media, 
			musicTitle: this.musicTitle
		}

		this.tracks.getDataFromServer(this.drawThings.drawTracks, this.drawTrackObject, this.trackUrl);
	}

	events(){
		this.playButton.addEventListener('click', ()=>{
			if(this.media.paused){
				this.media.play();
				this.playButton.setAttribute('style', 'background: url(assets/pause.svg) center no-repeat;');
			}else{
				this.media.pause();
				this.playButton.setAttribute('style', 'background: url(assets/play.svg) center no-repeat;');
			}
		}, false);

		this.addPlaylistButton.addEventListener('click', ()=>{
			if (this.addPlaylistBlock.style.display !== "inline"){
				this.addPlaylistBlock.style.display= 'inline';
			}else{
				this.addPlaylistBlock.style.display= 'none';
			}
		});

		this.addButton.addEventListener('click', function(){
			this.communicate.postToPlaylists(this.communicate.getPlaylists,this.drawThings.drawPlayLists, this.getPlaylistsDiv, this.title);
		}.bind(this))
	}
}

var startMain = new main;