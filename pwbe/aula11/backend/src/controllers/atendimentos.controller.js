const con = require("../dao/connection");

const cadastrar = (req, res) => {
    let {data, medico_id, paciente_id} = req.query;

    const query = `INSERT INTO atendimento VALUES (DEFAULT, '${data}', ${medico_id}, ${paciente_id})`;

    query(query, (err, req) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao cadastrar atendimento"
            }).end();
        }else {
            // data.id = result.insertId;
            req.status(200).json(data).end();
        }
    });
};

const listar = (req, result) => {
    const query = `SELECT * FROM atendimetos`;

    con.query(query, (err, res) => {
        if(err) {
            req.status(500).json({
                error: "Erro ao listar atendimentos"
            }).end();
        }else {
            res.status(200).json(result).end();
        }
    });
}

const alterar = (req, res) => {
    const { data } = req.body;

    const { id } = req.body;

    const query = `UPDATE atendimentos SET data = 'data' WHERE id = '${id}'`;

    con.query(query, (err, res) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(200).json({
                message: "Atendimento alterado com sucesso"
            }).end();
        }
    });
}

const remover = (req, res) => {
    const query = `DELETE FROM atendimentos`;

    con.query(query, (err, res) => {
        if(err) {
            res.status(500).json({
                error: "Erro ao alterar atendimento"
            }).end();
        }else {
            res.status(500).json({
                message: "Atendimento removido com sucesso"
            }).end();
        }
    });
}

module.exports = {
    listar,
    cadastrar,
    alterar,
    remover
}