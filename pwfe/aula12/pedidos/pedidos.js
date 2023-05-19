const container = document.querySelector("#container");

const produtos = JSON.parse(window.localStorage.getItem("pizzaspedidas")) || []


function prencherCard() {
    produtos.forEach((e, i) => {
        const card = document.createElement("div");
        const id = document.createElement("p");
        const data = document.createElement("p");
        const nome = document.createElement("p");
        const preco = document.createElement("p");
        const status = document.createElement("p");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        data.innerHTML = new Date().toLocaleDateString();
        preco.innerHTML = e.preco;
        status.innerHTML = "Pedido no forno";
        card.appendChild(id);
        card.appendChild(data);
        card.appendChild(nome);
        card.appendChild(preco);
        card.appendChild(status);
        container.appendChild(card);
    })
}

function limparDados(){
    window.localStorage.removeItem("pizzaspedidas");
    window.location.reload();
}

