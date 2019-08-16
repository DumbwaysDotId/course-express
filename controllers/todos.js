const models = require('../models')
const Todo = models.todo
const User = models.user

exports.index = (req, res) => {
    Todo.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(todos=>res.send(todos))
}

exports.show = (req, res) => {
    Todo.findOne({id: req.params.id}).then(todo=> res.send(todo))
}

exports.store = (req, res) => {
    Todo.create(req.body).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}

exports.update = (req, res) => {
    Todo.update(
        req.body,
        {where: {id: req.params.id}}
    ).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}

exports.delete = (req, res) => {
    Todo.destroy({where: {id: req.params.id}}).then(todo=> {
        res.send({
            message: "success",
            todo
        })
    })
}
