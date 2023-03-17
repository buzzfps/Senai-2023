const con = require('../dao/connect')

const teste = (req, res) => {
    res.json("Inventário Respondendo").end()
}

const criar = ()=>{
    let string = `INSERT INTO item VALUE('${req.body.id}', '${req.body.descricao}', '${req.body.valor}')`
    con.query(string,(err, result)=>{
        if(err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = ()=>{
    let string = "SELECT * FROM item"
    con.query(string, (err, result)=>{
        if(err == null)
            result.json(result).end()
    })
}

const excluir = ()=>{
    let string = `DELETE FROM item WHERE id = '${req.params.id}'`
    con.query(string, (err, result)=>{
        if(result.affectedRows > 0)
            res.status(200).end()
        else   
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    excluir
}