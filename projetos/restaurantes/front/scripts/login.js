const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const nome = document.querySelector("#nome");
const telefone = document.querySelector("#telefone");
const emailCadastro = document.querySelector("#emailCadastro");
const senhaCadastro = document.querySelector("#senhaCadastro");


function autenticar() {
    let data = {
        "email": email.value,
        "senha": senha.value
    }

    let options = {
        "method": "POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/login", options)
    .then(resp => { return resp.json() })
    .then(info => {
        if(info.id != undefined) {
            localStorage.setItem("corretor", JSON.stringify(info));

            window.location.href="./pages/home.html";
        }else {
            alert(info.msg);
        }
    })
}

function cadastro(){
    let data = {
        "nome": nome.value,
        "telefone": telefone.value,
        "email": emailCadastro.value,
        "senha": senhaCadastro.value
    }

    let options = {
        "method": "POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(data)
    }

    fetch("http://localhost:3000/cliente", options)
    .then(resp => { return resp.json() })
    .then(resp => {nome.value = ""})
    .then(resp => {telefone.value = ""})
    .then(resp => {emailCadastro.value = ""})
    .then(resp => {senhaCadastro.value = ""})
}
