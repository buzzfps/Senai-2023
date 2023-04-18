const con = require("../dao/connect");

const cadastro = (req, res) => {
    const { restauranteid, clienteid, data, nota, descricao} = req.body;

    let query = `INSERT INTO avaliacao 
                 VALUES (${restauranteid}, ${clienteid}, '${data}', ${nota}, '${descricao}')`;

    con.query(query, (err, response) => {
        console.log(err, response);
        if(err == undefined) {
            res.status(201).json(response).end();
        }else {
            let { sqlMessage, sqlState } = err;

            res.status(400).json({ sqlMessage, sqlState }).end();
        }
    });
}

const mostrar = (req, res) => {
    let query = "SELECT * FROM avaliacao";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports={
    cadastro,
    mostrar
}