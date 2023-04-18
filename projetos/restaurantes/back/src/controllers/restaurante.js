const con = require("../dao/connect");

const restaurante = (req, res) => {
    let query = "SELECT * FROM restaurante";

    con.query(query, (err, response) => {
        if(err == undefined) {
            res.status(200).json(response).end();
        }else {
            res.status(400).json(err).end();
        }
    })
}

module.exports ={
    restaurante
}