class Times {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.descricao = i.descricao
    }

    create() {
        return `INSERT INTO times VALUE('${this.id}','${this.nome}','${this.descricao}')`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM times`
        else
            return `SELECT * FROM times WHERE id = '${this.id}'`
    }

    update() {
        return `UPDATE times SET nome = '${this.nome}', descricao = '${this.descricao}', WHERE id = '${this.id}'`
    }

    delete() {
        return `DELETE FROM times WHERE id = '${this.id}'`
    }
}

module.exports = Times 