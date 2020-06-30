const sequencia = {
    _id: 1,
    get id() { return this._id++ } // ++ retorna o id e depois acrescenta de 1
}

const produtos = {
    //1: { id: 0, nome: '..', preco: '..' }
}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequencia.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || 'Não encontrado'
}

function getProdutos() {
    return Object.values(produtos)
    //Object.values(produtos)
}

function deletaProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}


module.exports = { salvarProduto, getProduto, getProdutos, deletaProduto }