const Nomecd = document.querySelector('#nomecidade');

function buscar(){
    let pesquisar = Nomecd.value
    api.get("/current.json?key=35bc5c89da28432b94a115703231004&q=" +pesquisar)
    .then(resp => {
        let div = document.querySelector('#info')
        let Nomecidade = document.createElement('p')
        let Regiao = document.createElement('p')
        let Ps = document.createElement('p')
        let temperaturac = document.createElement('p')
        let temperaturaf = document.createElement('p')
        let horaLocal = document.createElement('p')
        Nomecidade.innerHTML = resp.data.location.name
        Regiao.innerHTML = resp.data.location.region
        Ps.innerHTML = resp.data.location.country
        temperaturac.innerHTML = resp.data.current.temp_c
        temperaturaf.innerHTML = resp.data.current.temp_f
        horaLocal.innerHTML = resp.data.location.localtime
        div.appendChild(Nomecidade)
        div.appendChild(Regiao)
        div.appendChild(Ps)
        div.appendChild(temperaturac)
        div.appendChild(temperaturaf)
        div.appendChild(horaLocal)

})
}