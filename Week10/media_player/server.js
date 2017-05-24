const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

app.use(cors())

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index2.html');
	app.use('/assets', express.static('assets'));
})

app.get('/playlists', function get(req,res) {

	var playlist = [
		{ "id": 1, "title": "Favorites", "system": 1},
		{ "id": 2, "title": "Music for programming", "system": 0},
		{ "id": 3, "title": "Driving", "system": 0},
		{ "id": 5, "title": "Fox house", "system": 0},
	]

	res.send(playlist);
})

app.get('/playlist-track', function get(req,res) {

	var tracks = [
	{ "id": 21, "title": "Halahula", "artist": "Untitled artist", "duration": 545, "path": "c:/music/halahula.mp3" },
	{ "id": 412, "title": "No sleep till Brooklyn", "artist": "Beastie Boys", "duration": 312.12, "path": "c:/music/beastie boys/No sleep till Brooklyn.mp3" }
	]

	res.send(tracks);
})

app.listen(3000);