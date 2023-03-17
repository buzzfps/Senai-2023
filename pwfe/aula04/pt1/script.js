// var paragrafo = document.querySelector("p")

// console.log(paragrafo.innerHTML)

// paragrafo.innerHTML = "Novo Texto"

var paragrafo = document.querySelector("p")
var inpNome = document.querySelector("#nome")

var foto = document.querySelector("#foto")
var descricao = document.querySelector("#descricao")

function mostrarnome(){
}

function atualizardados(){
    let info = {
        "descricao":"Uma panda feliz",
        "imagem":[
            "https://super.abril.com.br/wp-content/uploads/2017/03/preto-no-branco-a-explicac3a7c3a3o-cientc3adfica-para-as-cores-do-panda.png?w=1024&resize=1200,800",
            "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02pLqAt6sNAVYcC5id-AtPcuP9tjs1i6JvJQLSYS22B1Z0TvgKwrQHeF3Aachz4fjRkc&usqp=CAU"
        ]
    }

    descricao.innerHTML = info.descricao
    foto.src = info.imagem[gerarNumero()]
}

function gerarNumero(){
    let num = Math.floor(Math.random() * 3)
    return num
}