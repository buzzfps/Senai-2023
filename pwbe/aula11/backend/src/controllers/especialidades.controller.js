const con = require("../dao/connection");

const cadastrar = (req, res) => {
    const {especialidade} = req.params;

    const query = `INSERT INTO especialidades VALUES (DEFAULT, '${especialidade}')`;

    _query(query, (err, result) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar especialidade"
            }).end();
        }else {
            // data.id = result.insertId;
            result.status(200).json(data).end();
        }
    });
};

const listar = (err, con) => {
    const query = `SELECT * FROM especiaidades`;

    con.query(query, (err, res) => {
        if(err) {
            result.status(500).json({
                error: "Erro ao listar especialidades"
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