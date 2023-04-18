const con = require('../dao/connect')
const Times = require('../models/times')

const teste = (req, res) => {
    res.json("tá rodando").end()
}

const criar = (req, res) => {
    let times = new Times(req.body)
    con.query(times.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
}

const listar = (req, res) => {
    let times = new Times(req.params)
    con.query(times.read(), (err, result) => {
        if (err == null)
            res.json(result).end()
    })
}

const alterar = (req, res) => {
    let times = new Times(req.body)
    con.query(times.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let times = new Times(req.params)
    con.query(times.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

module.exports = {
    teste,
    criar,
    listar,
    alterar,
    excluir
}