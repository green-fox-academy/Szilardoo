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
  database: "TODO"
});

const selectTodos = "SELECT * FROM todo;";

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
	app.use('/assets', express.static('assets'));
})

app.get('/todos', function get(req,res) {
	conn.query(selectTodos ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send(rows);
	})
})

app.post('/todos', function get(req,res) {
	console.log(req.body);
	const title = req.body.text;

	console.log(title);

	conn.query('INSERT INTO todo (text, completed) VALUES( ?, "false");', [title] ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send();
	})
})

app.delete('/todos/:id', function get(req,res) {

	var id = req.params.id;

	conn.query('DELETE FROM todo WHERE id = ?;', [id] ,function(err,rows){

		if(err){
			console.log("PARA", err.message);
		}
		res.send()
	})
})

app.listen(3000);