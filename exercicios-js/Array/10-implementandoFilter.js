// Desafio - implementar Filter
Array.prototype.filter2 = function(callback) {
    let filteredArray = []
    for(let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)){
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const produtosCaros = function(produto) {
    return produto.preco >= 2400
}
console.log(produtos.filter2(produtosCaros))