class Veiculos{
    placa
    modelo
    marca
    ano
    diaria
    constructor(placa, modelo, marca, ano, diaria){
        this.placa = placa
        this.modelo = modelo
        this.marca = marca
        this.ano = ano
        this.diaria = diaria
        this.idade = new Date().getFullYear() - this.ano
}
}
const veiculos = new Veiculos ('ABC-321', "S15", "nissan", 1999, 45.45)

console.log(veiculos)

