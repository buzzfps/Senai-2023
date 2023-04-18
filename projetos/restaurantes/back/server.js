const express = require('express')
const cors = require('cors')

const clienteRoutes = require("./src/routes/cliente")
const avaliacaoRoutes = require("./src/routes/avaliacao")
const categoriaRoutes = require("./src/routes/categorias")
const restauranteRoutes = require("./src/routes/restaurante")
const cardapioRoutes = require("./src/routes/cardapio")

const app = express()
app.use(express.json())
app.use(cors())
app.use(clienteRoutes)
app.use(avaliacaoRoutes)
app.use(categoriaRoutes)
app.use(restauranteRoutes)
app.use(cardapioRoutes)

app.listen(3000, () => {
    console.log("rodando")
})