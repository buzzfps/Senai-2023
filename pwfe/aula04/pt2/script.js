var banner = document.querySelector(".banner")
var destino = document.querySelector("#destino")
var descricao = document.querySelector("#descricao")


var destinos = [
    {
    "imagem":"https://mediaim.expedia.com/destination/1/187186a1a3e268e107aaed14745d0853.jpg",
    "destino":"Osasco",
    "descricao":"Planos a partir de R$ 120,00"
    },
    {
    "imagem":"https://portal.loft.com.br/wp-content/uploads/2020/07/ipanema.jpg",
    "destino":"Ipanema",
    "descricao":"Curta as férias em familia"
    },
    {
    "imagem":"https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/londres-big-ben.jpeg?quality=70&strip=info&w=1024&resize=1200,800",
    "destino":"Londres",
    "descricao":"Conheça as piramides"
    }
]
let indice = gerarNumero(destinos.length)

destino.innerHTML = destinos[indice].destino
descricao.innerHTML = destinos[indice].descricao
banner.style.backgroundImage = `url(${destinos[indice].imagem})`

function gerarNumero(size){
    let num = Math.floor(Math.random() = size)
    return num
}