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

const booksQuery = "SELECT * FROM book_mast;";

app.get('/books', function get(req,res) {
	var result = '<ul>';

	conn.query(booksQuery ,function(err,rows){
		if( err ){
			console.log("PARA", err.message);
		} else {
			rows.forEach(row => {
				result += ('<li>'+row.book_name+'</li>');
			})
		}
		result += '</ul>';
		res.send(result);
	})
})



app.listen(3000,()=> {
	console.log('server is running')
});