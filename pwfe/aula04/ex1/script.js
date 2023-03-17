var body = document.querySelector('body');


var destinos = [
    {
    "imagem":"https://mediaim.expedia.com/destination/1/187186a1a3e268e107aaed14745d0853.jpg",
    "descricao":"T-CUSTOM",
    "preco":"Planos a partir de R$ 120,00",
    "comprar":"comprar"
    },
]

for(let i = 0; i < destinos.length; i++) {
    let descricao = destinos[i];

    let banner = document.createElement("div")
    banner.className = "banner";
    banner.style.backgroundImage = `url(${descricao.imagem})`

    let desc = document.createElement("p")
    desc.innerHTML = destino.descricao

    let prec = document.createElement("p")
    desc.innerHTML = destino.preco

    let comp = document.createElement("button")
    comp.innerHTML = destino.comprar

    banner.appendChild(desc)
    banner.appendChild(prec)
    banner.appendChild(comp)
    body.appendChild(banner)
}