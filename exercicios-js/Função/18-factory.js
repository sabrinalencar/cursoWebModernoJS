// Funcao factory simples (fábrica)
function criarPessoa() {
    return {
        nome: 'Sabrina',
        sobrenome: 'Alencar'
    }
}

console.log(criarPessoa())

function criarProduto(nome, preco) {
    return {
        nome, // nome: nome (sintaxe desnecessaria)
        preco, //preco: preco (idem)
        desconto: (preco * 0.10).toFixed(2)
    }
}

console.log(criarProduto('geladeira',3000))
console.log(criarProduto('Notebook',2199.49))