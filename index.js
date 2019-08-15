const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const TodosController = require('./controllers/todos')

app.group("/api/v1", (router) => {

    //todos API
    router.get('/todos', TodosController.index)    
    router.get('/todo/:id', TodosController.show)    
    router.post('/todo', TodosController.store)    
    router.patch('/todo/:id', TodosController.update)    
    router.delete('/todo/:id', TodosController.delete)

    //another APIs goes here
})


app.listen(port, () => console.log(`Listening on port ${port}!`))