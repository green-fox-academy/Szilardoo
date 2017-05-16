'use strict';

const express = require('express');

const app = express();

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
	app.use('/assets', express.static('assets'));
})

app.get('/doubling', function(req, res) {
	const input = req.query.input;
	if(input !== undefined){
		res.send({
			received: input,
	  		result: input*2
		})
	}else {
		res.send({
		  "error": "Please provide an input!"
		})
	}
})

app.get('/greeter', function(req, res) {
	const name = req.query.name;
	const title = req.query.title;
	if(name === undefined){
		res.send({
			"error": "Please provide a name!"
	})
	}else if(title === undefined){
		res.send({
			"error": "Please provide a title!"
	})
	}else {
		res.send({
		  "welcome_message": "Oh, hi there " + name +", my dear "+title+"!"
	})
	}
})

app.get('/appenda/:append', function(req, res) {
	const param = req.params.append;
	res.send({
		"appended": param+'a'
	})
})


app.listen(8080);