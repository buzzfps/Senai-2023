const con = require("../dao/connection");

const cadastrar = (req, res) => {
    const {nome, nascimento} = req.body;

    const query = `INSERT INTO paciente VALUES (DEFAULT, '${nome}', '${nascimento}')`;

    con.query(query, (err, res) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar paciente"
            }).end();
        }else{
            // data.id = result.insertId;
            res.status(200).json(info).end();
        }
    });
};

const listar = (req, res) => {
    const query = `SELECT * FROM paciente`;

    con.query(query, (err, res) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao listar pacientes"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}
module.exports = {
    cadastrar,
    listar
}
