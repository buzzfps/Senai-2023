const con = require("../dao/connect");

const cardapio = (req, res) => {
    let query = "SELECT * FROM cardapio";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports ={
    cardapio
}