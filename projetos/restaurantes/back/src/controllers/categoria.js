const con = require("../dao/connect");

const categorias = (req, res) => {
    let query = "SELECT * FROM categoria";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports ={
    categorias
}