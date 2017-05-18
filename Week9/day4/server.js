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

app.get('/bookstitles', function get(req,res) {
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



const booksQueryAndJoin = "SELECT * FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;"

app.get('/books', function get(req,res) {
	var result = '<table><tr><th>Book title</th><th>Authors name</th><th>Category</th><th>Publishers name</th><th>Price</th></tr>';


	conn.query(booksQueryAndJoin ,function(err,rows){
		if( err ){
			console.log("PARA", err.message);
		} else {
			rows.forEach(row => {
				result += ('<tr><td>'+row.book_name+'</td><td>'+row.aut_name+'</td><td>'+row.cate_descrip+'</td><td>'+row.pub_name+'</td><td>'+row.book_price+'</td></tr>');
			})
		}
		result += '</table>';
		res.send(result);
	})
})



app.listen(3000,()=> {
	console.log('server is running')
});