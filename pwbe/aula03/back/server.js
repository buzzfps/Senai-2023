const express = require('express')
const router = require('./src/items/routes')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/',router)

app.listen(3000,()=>{
    console.log("Respondendo na porta 3000")
})