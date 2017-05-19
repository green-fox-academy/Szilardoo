'use strict';


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
  database: "posts"
});

const query = "SELECT * FROM posts;";

var result = { "posts": 0};


app.get('/posts', function get(req,res) {

	conn.query(query ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		result.posts = rows;
		res.send(result);
	})
})



app.post('/posts', function get(req,res) {
	const title = req.body.title;
	const href = req.body.href;

	conn.query('INSERT INTO posts ( title, href, score, owner) VALUES( ' + '"' + title +'"' + ', "' + href + '" , "0", "Unknown");'  ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.status(200).send()
	})

})


app.delete('/posts/:id', function get(req,res) {

	var ownId = req.params.id;

	console.log(ownId);

	conn.query('DELETE FROM posts WHERE id = ?;', [ownId] ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send()
	})

})


app.put('/posts/:id/upvote', function get(req,res) {

	var ownId = req.params.id;

	var score = 0;

	conn.query('SELECT score FROM posts WHERE id = ?;', [ownId], function(err, rows){
		rows.forEach(row=> {
			score = parseInt(row.score);
		})
		score += 1;

		conn.query('UPDATE  posts SET score = ? WHERE id = ?;', [score, parseInt(ownId)] ,function(err,rows){

			if(err){
				console.log("PARA", err.message);
			}
			res.send()
		})
	});

})

app.put('/posts/:id/downvote', function get(req,res) {

	var ownId = req.params.id;

	var score = 0;

	conn.query('SELECT score FROM posts WHERE id = ?;', [ownId], function(err, rows){
		rows.forEach(row=> {
			score = parseInt(row.score);
		})
		score -= 1;

		conn.query('UPDATE  posts SET score = ? WHERE id = ?;', [score, parseInt(ownId)] ,function(err,rows){

			if(err){
				console.log("PARA", err.message);
			}
			res.send()
		})
	});

	

})





app.listen(3000);