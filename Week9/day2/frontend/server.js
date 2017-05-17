'use strict';

const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

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

app.post('/dountil/:what/', function(req, res) {
	const param = req.params.what;
	const until = req.body.until;

	let sum = function(num) {
		let sum = 0;
		for(var i = 0; i <= num; i++){
			sum += i;
		}
		return sum;
	}
	let fact = function(num) {
		let fact = 1;
		for(var i = 1; i <= num; i++){
			fact *= i;
		}
		return fact;
	}

	if(param === 'factor'){
		res.send({
			"result": fact(until) 
		})
	}else{
		res.send({
			"result": sum(until) 
	})
	}
})

app.listen(8080);