class Aluguel{
    id
    veiculo
    dataRetirada
    dataDevolucao
    dias
    valorAluguel
    constructor(id, veiculo, dataRetirada, dataDevolucao, dias){
        this.id = id
        this.veiculo = veiculo
        this.dataRetirada = new Date()
        this.dataDevolucao = new Date()
        this.dias = dias
        this.valorAluguel = Number((dataDevolucao*dias)).toFixed(2) 
}
}
const aluguel = new Aluguel ('1', "JHK-2518", "2023-04-01", "2023-04-06", 4)

console.log(aluguel)

