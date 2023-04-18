const con = require("../dao/connect");

const adicionar = (req, res) => {
    const { nome , telefone, email, senha} = req.body;

    let query = `INSERT INTO cliente 
                 VALUES (DEFAULT, '${nome}', '${telefone}', '${email}', '${senha}')`;

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

const listar = (req, res) => {
    let query = "SELECT * FROM cliente";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

const autenticar = (req, res) => {
    const {email, senha} = req.body;

    let query = `SELECT * FROM cliente WHERE email = '${email}' AND senha = '${senha}'`;

    con.query(query, (err, response) => {
        if(err == undefined){
            if(response.length == 0) {
                res.status(401).json({"msg":"email ou Senha Invalidos"}).end();
            }else {
                let autenticar = response[0];
    
                delete autenticar.senha;
    
                res.status(200).json(autenticar).end();
            }
        }else {
            res.status(401).json(err).end();
        }
    });
}


module.exports ={
    adicionar,
    listar,
    autenticar
}