const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Kit de Lápis", "preco": 31.90 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
//Desafio - Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const somentePreco = obj => obj.preco
let precos = carrinho.map(paraObjeto).map(somentePreco)
console.log(precos)
