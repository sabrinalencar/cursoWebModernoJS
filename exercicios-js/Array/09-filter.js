const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'ipad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false },
]

const produtosCaros = function(produto) {
    return produto.preco >= 2400
}
const produtosFrageis = function(produto) {
    return produto.fragil
}
console.log("Caros")
console.log(produtos.filter(produtosCaros))
console.log("Frageis")
console.log(produtos.filter(produtosFrageis))