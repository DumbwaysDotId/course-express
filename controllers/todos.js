const Todo = require('../models').todo

exports.index = (req, res) => {
    Todo.findAll().then(todos=>res.send(todos))
}

exports.show = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.store = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}
