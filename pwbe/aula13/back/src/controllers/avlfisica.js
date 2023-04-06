const con = require('../dao/connect')


const listar = (req, res) => {
    con.query('SELECT * FROM paciente', (result,err)=>{
        if(err == null){
            res.json(result).end();
        }else{
            res.json(err).end();
        }
    })
}

const criar =(req, res) => {
    const {nome, nasc, peso, alt} = req.body;

    const query = `INSERT INTO paciente VALUES( DEFAULT, '${nome}', '${nasc}', ${peso}, ${alt}, '', '', '')`
    con.query(query, (err, result) => {
        if(err == null){
            res.json(result).end()
        }else{
            res.json(err).end()
        }
    })
}

module.exports = {
    listar,
    criar
}