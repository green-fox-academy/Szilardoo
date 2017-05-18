'use strict';

const mysql = require("mysql");
const express = require("express");


const app = express();


var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

const country = 'USA';
const city = 'Atlanta';
const query = {
	sql: "SELECT * FROM author WHERE country = ? AND home_city = ?;",
	values: [country, city]
}

app.get('/', function get(req,res) {
	var result = [];

	conn.query(query ,function(err,rows){
		if( err ){
			console.log("PARA", err.message);
		} else {
			rows.forEach(row => {
				result.push(row.aut_name);
				console.log(result);
			})
		}
		res.send(result);
	})
})



app.listen(3000,()=> {
	console.log('server is running')
});