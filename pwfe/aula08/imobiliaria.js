const body = document.querySelector("body");
const imoveis = JSON.parse(localStorage.getItem("imoveis"));

imoveis.forEach(imovel => {
    createCard(imovel);
});



function createCard(imovel) {
    const endereco = imovel.endereco;
    const valor = imovel.valor;

    let card = document.createElement("div");
    let pEnd = document.createElement("p");
    let pValor = document.createElement("p");
    let button = document.createElement("button");

    pEnd.innerHTML = endereco;
    pValor.innerHTML = valor;
    
    button.innerHTML = "Vender";
    button.addEventListener("click", () => {
        
    })

    
    card.appendChild(pEnd);
    card.appendChild(pValor);

    body.appendChild(card);
    body.appendChild(pEnd);
    body.appendChild(pValor);
    body.appendChild(button);
}