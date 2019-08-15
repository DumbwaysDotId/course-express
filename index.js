const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

app.use(bodyParser.json())

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

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
})

app.post('/todo', (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(data)
})

app.patch('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1 
    const data = req.body    
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
})

app.delete('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1        
    todos.splice(index, 1)
    res.send(todos)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))