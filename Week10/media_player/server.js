const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors')


const app = express();

app.use(cors())

app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "music_player"
});

const selectPlaylists = "SELECT * FROM playlists;";
const selectTracks = "SELECT * FROM tracks;";

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index2.html');
	app.use('/assets', express.static('assets'));
})

app.get('/playlists', function get(req,res) {
	conn.query(selectPlaylists ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send(rows);
	})
})

app.get('/playlist-track', function get(req,res) {
	conn.query(selectTracks ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send(rows);
	})
})

/*app.get('/playlist-track/:id', function get(req,res) {
	var id = req.params.id;

	res.send(tracks);
})*/

app.post('/playlists', function get(req,res) {
	const title = req.body.title;

	conn.query('INSERT INTO playlists ( title, system) VALUES( ?, "0");', [title] ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.status(200).send()
	})

})

app.delete('/playlists/:id', function get(req,res) {

	var ownId = req.params.id;

	conn.query('DELETE FROM playlists WHERE id = ?;', [ownId] ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send()
	})
})



app.listen(3000);