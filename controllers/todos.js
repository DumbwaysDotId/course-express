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

exports.index = (req, res) => {
    res.send(todos)
}

exports.show = (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
}

exports.store = (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(data)
}

exports.update = (req, res) => {
    const id = req.params.id
    const index = id - 1 
    const data = req.body    
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
}

exports.delete = (req, res) => {
    const id = req.params.id
    const index = id - 1        
    todos.splice(index, 1)
    res.send(todos)
}
