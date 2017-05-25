
class draw{

	drawPlayLists(playlists, data){
		console.log(this);

		data.innerHTML = '<div class="playlist-elements">All tracks</div>';

		for(let i = 0; i < playlists.length; i++){

			let newPlaylist = document.createElement('div');
			newPlaylist.className = 'playlist-elements';
			if(playlists[i].system === 0){
				newPlaylist.innerHTML = playlists[i].title + '<button class="delete">X</button>';
			}else{
				newPlaylist.innerHTML = playlists[i].title;
			}

			newPlaylist.addEventListener('click', function(){

				this.active(newPlaylist);

				console.log(playlists[i].id);
				console.log('That part is not ready yet');
			}.bind(this))

			data.appendChild(newPlaylist);	
		}

	}

	active(element){
		this.playlists = document.querySelectorAll('.playlist-elements');
		for(let i = 0; i < this.playlists.length; i++){
			this.playlists[i].classList.remove('active');
		}
		element.className = "active playlist-elements";
	}

	drawTracks(tracks, object){

		for(let i = 0; i < tracks.length; i++){
			var newTrack = document.createElement('div');
			newTrack.className = 'track';
			newTrack.innerHTML = '<span class="number">'+(i+1).toString()
			+'</span>'+tracks[i].title+
			'<span class="length">'+tracks[i].duration+'</span>';

			newTrack.addEventListener('click', ()=>{
				object.media.setAttribute('src', tracks[i].path)
				object.musicTitle.textContent = tracks[i].title;
			})

			object.div.appendChild(newTrack);
		}
	}
}