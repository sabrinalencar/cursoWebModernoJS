// Desafio - Implementar função map
Array.prototype.map2 = function(callback) {
    let array = []
    for(let i = 0; i < this.length; i++) {
        array.push(callback(this[i]))
    }
    return array
}

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
