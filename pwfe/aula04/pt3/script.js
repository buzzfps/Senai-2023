var body = document.querySelector('body');


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

for(let i = 0; i < destinos.length; i++) {
    let destino = destinos[i];

    let banner = document.createElement("div")
    banner.className = "banner";
    banner.style.backgroundImage = `url(${destino.imagem})`

    let dest = document.createElement("p")
    dest.innerHTML = destino.destino

    console.log(destino.destino)

    let desc = document.createElement("p")
    dest.innerHTML = destino.descricao

    banner.appendChild(dest)
    banner.appendChild(desc)

    body.appendChild(banner)
}