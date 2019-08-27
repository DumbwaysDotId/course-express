# Routing

Routing in express is pretty straightforward. Make sure You already understand the core concept of REST API like using GET/POST/PATCH/PUT/DELETE etc. Then, follow these steps to make something similar to this repo:

- Install body-parser, this is require to get incoming JSON input from POST
- In index.js file, modify your code to be like this:

index.js
```javascript
const express = require('express')
//init bodyParser
const bodyParser = require('body-parser')

const app = express()
const port = 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//make hardcoded array of obj todos
const todos = [
    {
        id: 1,
        title: "Walking with Lucinta",
        isDone: true
    },
    {
        id: 2,
        title: "Sleeping with Lucinta",
        isDone: false
    },
]

//GET list route: simply send arr of obj todos on your user screen
app.get('/todos', (req, res) => {
    res.send(todos)
})

//GET detail route: send the todo obj, by received id request params
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
})

//POST route: receive json body request, from user input, then push to todos array
app.post('/todo', (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(data)
})

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
app.patch('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1 
    const data = req.body    
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
})

//DELETE route: delete the todo obj, by received id request params
app.delete('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1        
    todos.splice(index, 1)
    res.send(todos)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))
```