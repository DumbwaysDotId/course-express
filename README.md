# Working with Database

In this course, We'll using plain MySQL. In order to do so, first make sure that You already setup your PC to run MySQL, then:

- create database named "course-express"
- create table todos with, these fields: 
    - id PK ai
    - title varchar 
    - isDone boolean/tinyint
- add "mysql" package in Your express app
```
$ npm i --save mysql
```
- add "db.js" file to setup the connection to 

```javascript
const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'course-express'
})

connection.connect()

module.exports = connection

```
- call the query on code (no hardcode hardcode club anymore) in "controllers/todos.js"

```javascript
...

exports.index = (req, res) => {
    connection.query('SELECT * FROM todos', (err, rows)=> {
        if (err) throw err
      
        res.send(rows)
    })    
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows)=> {
        if (err) throw err
      
        res.send(rows[0])
    })
}
...
```