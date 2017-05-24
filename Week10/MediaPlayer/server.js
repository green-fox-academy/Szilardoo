const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')


const app = express();

app.use(cors())

app.use(bodyParser.json());

app.get('/playlist-tracks', function get(req,res) {

	conn.query(query ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		result.posts = rows;
		res.send(result);
	})
})

app.get('/playlist-tracks', function get(req,res) {

	conn.query(query ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		result.posts = rows;
		res.send(result);
	})
})