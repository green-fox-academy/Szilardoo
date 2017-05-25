
class draw{

	drawPlayLists(playlists, div){

		div.innerHTML = '<div class="playlist-elements">All tracks</div>';

		for(let i = 0; i < playlists.length; i++){
			var newPlaylist = document.createElement('div');
			newPlaylist.className = 'playlist-elements';
			newPlaylist.innerHTML = playlists[i].title + '<button class="delete">X</button>';

			newPlaylist.addEventListener('click', ()=>{
				console.log(playlists[i].id);
				console.log('That part is not ready yet');
			})

			div.appendChild(newPlaylist);

		}
	}

	drawTracks(tracks, div, audio){

		for(let i = 0; i < tracks.length; i++){
			var newTrack = document.createElement('div');
			newTrack.className = 'track';
			newTrack.innerHTML = '<span class="number">'+(i+1).toString()
			+'</span>'+tracks[i].title+
			'<span class="length">'+tracks[i].duration+'</span>';

			newTrack.addEventListener('click', ()=>{
				audio.setAttribute('src', tracks[i].path)
			})

			div.appendChild(newTrack);
		}
	}
}