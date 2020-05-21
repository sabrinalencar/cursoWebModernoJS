// Object.preventExtensions
// não consegue adicionar
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preco: 19.90,
    tag:'promoção'
})
console.log('Extensível:',Object.isExtensible(produto))
produto.nome = 'borracha' 
produto.descricao = 'borracha escolar branca' 
delete produto.tag
console.log(produto) // { nome: 'borracha', preco: 19.9 }

// Object.seal
// não consegue adc nem excluir
const pessoa = {
    nome: 'Juliana',
    idade: 35
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.nome = 'Rafaela'
delete pessoa.idade
pessoa.sobrenome = 'Silva'
console.log(pessoa) // { nome: 'Rafaela', idade: 35 }

//Object.freeze = selado + valores constantes
const bola = {
    nome: 'bola de futebol',
    ano: 2011
}
Object.freeze(bola)
delete bola.ano
bola.formato = 'redonda'
console.log('Frozen', Object.isFrozen(bola))
console.log(bola)