const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT A.*, B.name as created_by FROM todos A LEFT JOIN users B ON A.created_by = B.id', (err, rows)=> {
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

exports.store = (req, res) => {
    const { title, is_done } = req.body    

    connection.query(`INSERT INTO todos (title, is_done) VALUES ('${title}', '${is_done}')`, (err)=> {
        if (err) throw err
    })    

    res.send({
        success: true,
        data: req.body
    })
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
}
