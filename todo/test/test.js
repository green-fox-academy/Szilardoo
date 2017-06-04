'use strict';

const tape = require('tape');
const mysql = require('mysql');



var conn = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "TODO"
});

function getAllMessage(callback) {
	conn.query('SELECT * FROM todo', function (error, results, fields) {
		if (error) throw error;
		callback(results);
	});
	conn.end();
}

function insertIntoDatabase(text){
	var title = text;
	//var id;
	conn.query('TRUNCATE todo;',function(err,rows){
		if (err) throw err;
	})
	conn.query('INSERT INTO todo (text, completed) VALUES( ?, "false");', [title] ,function(err,row){
		if (err) throw err;
		//id = row.insertId;
	})
}

function databaseTexts(data){
	var result = [];
	for (let i = 0; i<data.length; i++) {
		//result.push(data[i].id);
		result.push(data[i].text);
	}
	return result;
}

tape('ISERTED test', function (t) {
	var text = 'test';
	insertIntoDatabase(text);
	getAllMessage( results => {
		var list =  databaseTexts(results);
		console.log(list);
		t.equal(list.includes(text), true);
		t.end();
	})    
});