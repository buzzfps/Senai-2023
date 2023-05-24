class Componente {
    constructor(obj) {
        this.obj = obj;
    }
    add(componente) { }
    remove(componente) { }
    getfilho(index) { }
    getObj() { }
    print() { }
}

// representa os objetos folha na árvore
class Folha extends Componente {
    constructor(obj) {
        super(obj);
    }
    getObj() {
        return this.obj;
    }
    print() {
        console.log(this.obj);
    }
}

class Composite extends Componente {
    constructor(obj) {
        super(obj);
        this.filhos = [];
    }
    add(componente) {
        this.filhos.push(componente);
    }
}

class Compra {
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        this.id = id
        this.data = new Date(data)
        this.produto = produto
        this.cliente = cliente
        this.totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.preco * this.quantidade
    }

}

//Classe parcela com construtor simples e calculos do valor da parcela, dias de atraso e juros caso haja atraso
class Parcela {
    constructor(id, compra, dataVencimento, dataPagamento) {
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento)
        this.dataPagamento = dataPagamento != undefined ? new Date(dataPagamento) : undefined
        this.valorParcela = this.getValorParcela()
        this.Juros = this.getJuros()
    }
    getValorParcela() {
        return this.compra.totalParcelas > 0 ? this.compra.total / this.compra.totalParcelas : this.compra.total
    }
    getDiasAtraso() {
        if (this.dataPagamento == undefined || this.dataPagamento == null)
            return 0
        else
            if (this.dataPagamento > this.dataVencimento) {
                const diferencaEmMilissegundos = this.dataPagamento - this.dataVencimento
                const umDiaEmMilissegundos = 1000 * 60 * 60 * 24
                return Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos)
            }
            else return 0
    }
    getJuros() {
        return this.valorParcela * 0.01 * this.getDiasAtraso()
    }
}

//Lista de objetos do tipo Compra
const Compras = [
    new Compra(1, '2022-03-25', 'TV LCD 4K 50" LG', 'Jair Santana', 4, 2800.00, 2),
    new Compra(2, '2022-05-12', 'TV LCD 4K 50" Sansung', 'Jurema Santana', 2, 3100.00, 1),
    new Compra(3, '2022-06-08', 'TV LCD 4K 50" LG', 'Mariana Silva', 3, 2850.00, 2),
    new Compra(4, '2023-02-17', 'TV LCD 4K 50" Sansung', 'Marta Oliveira', 5, 2899.90, 1),
]

//Lista de objetos do tipo Parcelasa
const Parcelas = [
    new Parcela(1, 0, '2022-04-25', '2022-04-23'),
    new Parcela(2, 0, '2022-05-25', '2022-05-24'),
    new Parcela(3, 0, '2022-06-25', '2022-06-27'),
    new Parcela(4, 0, '2022-07-25', '2022-07-30'),
    new Parcela(5, 1, '2022-06-12', '2022-06-12'),
    new Parcela(6, 1, '2022-07-12', '2022-07-15'),
    new Parcela(7, 2, '2022-07-08', '2022-07-18'),
    new Parcela(8, 2, '2022-08-08', '2022-08-08'),
    new Parcela(9, 2, '2022-09-08', '2022-09-06'),
    new Parcela(10, 3, '2023-03-17', '2023-03-200'),
    new Parcela(11, 3, '2023-04-17', '2023-04-220'),
    new Parcela(12, 3, '2023-05-17', null),
    new Parcela(13, 3, '2023-06-17', null),
    new Parcela(14, 3, '2023-07-17', null)
]

const composicao = new Composite(Compras[0]);
composicao.add(new Folha(Parcelas[0]));
composicao.print();