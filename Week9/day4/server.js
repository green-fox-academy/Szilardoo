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



app.get('/books', function get(req, res) {

    var category = req.query.category;
    var publisher = req.query.publisher;
    var plt = req.query.plt;
    var pgt = req.query.pgt;

    var myList = [];

    if(category !== undefined){
    	myList.push(' cate_descrip = '+ '"' + category + '"');
    }
    if(publisher !== undefined){
    	myList.push(' pub_name = '+ '"' + publisher + '"');
    }
    if(plt !== undefined){
    	myList.push(' book_price < '+ '"' + plt + '"');
    }
    if(pgt !== undefined){
    	myList.push(' book_price > '+ '"' + pgt + '"');
    }

    console.log(myList);

    console.log(category)



    var add = (myList.length > 0)?' WHERE ': '';
    add += myList.join(' AND ');

   var query = "SELECT * FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id";

   var result = "<table><tr><th>Book title</th><th>Author name</th><th>Category</th><th>Publisher name</th><th>Price</th></tr>";
    conn.query(query+add+';',function(err,rows){
        if(err) {
            console.log("PARA", err.message);
        } else {
            rows.forEach(row => {
                result += '<tr><td>' + row.book_name + '</td><td>' + row.aut_name + '</td><td>' + row.cate_descrip + '</td><td>' + row.pub_name + '</td><td>' + row.book_price + '</td></tr>';
            });
        }   result += '</table>'
        res.send(result);
    });
})


app.listen(3000,()=> {
	console.log('server is running')
}); 