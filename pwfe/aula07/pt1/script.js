const arr = [5, 8, 7, 10, 2, 6, 5, 2, 10];

const body = document.querySelector("body")

arr.forEach((item, indice)=>{
    let calc = item * 2;

    let texto = document.createElement("p");

    //<p>10</p> 
    // texto.innerHTML = item + "x 2 =" +calc;
    texto.innerHTML = `${item} x 2 = ${calc}`;

    body.appendChild(texto)
});

let novoArr = arr.map((item, indice)=>{
    let calc = item * 2;

    let texto = document.createElement("h3")
    texto.innerHTML = calc;

    return texto;
});

let filterArr = arr.filter((item, indice) =>{
    return ((item > 5) && (item < 10))
});

let data = arr.find((item, indice)=>{
    return item = 5;
})

let info =[
    {
        "nome":"fulano da silva",
        "matricula": 12345,
        "vendas": 5
    },
    {
        "nome":"beltrano da silva",
        "matricula": 54321,
        "vendas": 10
    },
    {
        "nome":"ciclano da silva",
        "matricula": 56789,
        "vendas": 8
    }
];

let metaVendas = 7;

let vendedores = info.filter((valor, i)=>{
    return valor.vendas >= 7
})

let vendedor = info.find((data, index)=>{
    return data.matricula == 54321
})

console.log(vendedor.nome)