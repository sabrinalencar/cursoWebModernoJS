const express = require('express')
const app = express()
const bodyParser = require('body-parser') 

app.use(bodyParser.urlencoded({ extended: true }))// interpreta e devolve um obj

app.post('/usuarios', (req, resp) => {
    console.log(req.body)
    resp.send('<h1>Parabéns Usuário Criado!</h1>')
})
/** 
 * get -> dados na url 
 * usar a query
app.get('/usuarios', (req, resp) => {
    console.log(req.query)
    resp.send('<h1>Parabéns usuário buscado</h1>')
})
*/
app.post('/usuarios/:id', (req, resp) => {
    console.log(req.body)
    console.log(req.params.id)
    resp.send('<h1>Parabéns Usuário Alterado!</h1>')
})


app.listen(3003)// porta