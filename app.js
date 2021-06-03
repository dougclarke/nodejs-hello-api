const express = require('express')
const sqlite3 = require('sqlite3')
const app = express()

const db = new sqlite3.Database("database.sqlite", (err) => {
	if(err){
		console.error("Error connecting to SQLite database", err.message)
		throw err
	}
	else {
		db.run(`CREATE TABLE hello (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name text
			)`,
		(err) => {
			// The table already exists
		})
	}
})

app.get('/', (req, res) => {
	res.send("Sorry friend but there is nothing to see here. Maybe you should say hello and tell me your name.")
})

app.get("/hello", (req, res) => {
	let name = (req.query.name) ? req.query.name : "stranger"
	if(name !== "stranger"){
		// Check the database for an existing name
		db.get("select name from hello where name = ?", [name], (err, ret) => {
			if(err){
				console.error(err.message)
			}
			if(!ret){
				// Add a new name to the database
				db.run("insert into hello (name) values (?)", [name])
			}
		})
	}
	res.send(`Hello ${name}!`)
})

module.exports = app;
