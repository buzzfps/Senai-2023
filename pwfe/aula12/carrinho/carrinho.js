const btFechar = document.querySelector("#btFechar");
const detalhes = document.querySelector("#detalhes");
const tcorpo = document.querySelector("#tcorpo");

const produtos = JSON.parse(window.localStorage.getItem("produtos")) || []


function prencherTabela() {
    produtos.forEach((e, i) => {
        const linha = document.createElement("tr");
        const id = document.createElement("td");
        const nome = document.createElement("td");
        const descricao = document.createElement("td");
        const preco = document.createElement("td");
        const enviar = document.createElement("td");
        id.innerHTML = e.id;
        nome.innerHTML = e.nome;
        descricao.innerHTML = e.descricao;
        preco.innerHTML = e.preco;
        enviar.innerHTML = `<button id="enviarpizza" onclick="enviarproduto('${i}')">Enviar Produto</button>`;
        linha.appendChild(id);
        linha.appendChild(nome);
        linha.appendChild(preco);
        linha.appendChild(enviar);
        tcorpo.appendChild(linha)
    })
}

function limparDados(){
    
    window.localStorage.removeItem("produtos");
    window.location.reload();
}

function enviarproduto(i) {
    const item = {
        id: produtos[i].id,
        nome: produtos[i].nome,
        descricao: produtos[i].descricao,
        preco: produtos[i].preco,
    }
 
    const pizzaspedidas = JSON.parse(window.localStorage.getItem("pizzaspedidas")) || []
    pizzaspedidas.push(item)
    window.localStorage.setItem("pizzaspedidas", JSON.stringify(pizzaspedidas))

    produtos.splice(i, 1)
    window.localStorage.setItem("produtos", JSON.stringify(produtos))
    window.location.reload()
 }