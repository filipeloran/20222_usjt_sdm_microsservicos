const express = require ('express')
const app = express()
//estamos aplicando um middleware
app.use(express.json())

const lembretes = {}
let contador = 0

//GET cadastrar novo lembrete
//localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
    console.log("Requisição get...")
    res.send(lembretes)
})

//POST obter a lista de lembretes
//localhost:4000/lembretes
// {texto: 'Fazer café'}
app.post('/lembretes', (req, res) => {
    contador++
    const texto = req.body.texto
    lembretes[contador] = {contador, texto}
    res.status(201).end()
})

app.listen(4000, () => console.log('Lembretes. Porta 4000'))
