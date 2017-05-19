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

	console.log(title);
	console.log(href);

	conn.query('INSERT INTO posts ( title, href, score, owner) VALUES( ' + '"' + title +'"' + ', "' + href + '" , "0", "Unknown");'  ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.status(200).send()
	})

})

app.post('/posts/:id/:vote', function get(req,res) {

	const param = req.params.id;
	const title = req.body.title;
	const href = req.body.href;

	console.log(title);
	console.log(href);

	conn.query('INSERT INTO posts ( title, href, score, owner) VALUES( ' + '"' + title +'"' + ', "' + href + '" , "0", "Unknown");'  ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.status(200).send()
	})

})

app.listen(3000);