class Compra {
    id
    data
    produto
    cliente
    totalParcelas
    preco
    quantidade
    total
    constructor(id, data, produto, cliente, totalParcelas, preco, quantidade) {
        this.id = id
        this.data = new Date(data)
        this.produto = produto
        this.cliente = cliente
        this.totalParcelas = totalParcelas
        this.preco = preco
        this.quantidade = quantidade
        this.total = this.getTotal()
    }

    getTotal() {
        return (this.preco*this.quantidade).toFixed(2)
    }
}

class Parcelas {
    id
    compra
    dataVencimento
    dataPagamento
    valorParcela
    juros
    DiasAtraso
    constructor(id, compra, dataVencimento, dataPagamento){
        this.id = id
        this.compra = compra
        this.dataVencimento = new Date(dataVencimento)
        this.dataPagamento = new Date(dataPagamento)
        this.valorParcela = this.getvalorParcela()
        this.DiasAtraso = this.getDiasAtraso()
        this.juros = this.getJuros()
    }

    getvalorParcela(){

    }

    getJuros(){

    }

    getDiasAtraso(){

    }
}


const compras = [       
    new Compra(1, 25-03-2022, "TV LCD 4K 50 LG", "Jair Santana", 4, 2800.00, 2),
    new Compra(2, 12-05-2022, "TV LCD 4K 50 Sansung", "Jurema Santana", 2, 3100.00, 1),
    new Compra(3, 08-06-2022, "TV LCD 4K 50 LG", "Mariana Silva", 3, 2850.00, 2),
    new Compra(4, 17-02-2023, "TV LCD 4K 50 Sansung", "Marta Oliveira", 5, 2899.90, 1)
]

const parcelas = [
    new Parcelas(1, 1, "2022-04-25", "2022-04-23"),
    new Parcelas(2, 1, "2022-05-25", "2022-05-24"),
    new Parcelas(3, 1, "2022-06-25", "2022-06-27"),
    new Parcelas(4, 1, "2022-07-25", "2022-07-30"),
    new Parcelas(5, 2, "2022-06-12", "2022-06-12"),
    new Parcelas(6, 2, "2022-07-12", "2022-07-15"),
    new Parcelas(7, 3, "2022-07-08", "2022-07-18"),
]

console.log(compras)
console.log(parcelas)