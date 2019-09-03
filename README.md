# Structuring

There are so many pattern to structure Your express app. The structure used here are pretty simple and straightforward. 

Create a Todos controller at "controllers/todos.js", the code are looked like these

```javascript
const todos = [
    {
        id: 1,
        title: "Walking with Lucinta",
        isDone: true
    },
    ...
]

exports.index = (req, res) => {
    res.send(todos)
}

exports.show = (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
}

...
```
the controller here are just group of function that mimic the callback used in express router.

So now in the main file "index.js", You can simply use it like these

```javascript
...
//import the controller
const TodosController = require('./controllers/todos')

app.group("/api/v1", (router) => {

    //todos API, call the controller here in the callback
    router.get('/todos', TodosController.index)    
    router.get('/todo/:id', TodosController.show)    
    router.post('/todo', TodosController.store) 
    ...
}

```

