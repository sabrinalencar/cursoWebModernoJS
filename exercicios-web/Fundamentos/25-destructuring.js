//usado p desestruturar, pegar atributos de um obj, elementos de um array etc 
//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco : {
        logradouro: 'Rua',
        numero: 100
    }
}

//usando destructuring
const { nome, idade } = pessoa 
console.log(nome, idade)

//mudando o nome da variavel
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, altura } = pessoa
console.log(sobrenome, altura)
const { feliz = true } = pessoa //evitando receber undefined
console.log(feliz)

//criando apenas endereco
const { endereco } = pessoa
console.log('endereco: ',endereco)
//criando logradouro e numero
const { endereco: { logradouro, numero, cep } } = pessoa
console.log('logradouro: ' + logradouro, 'numero: ' + numero,'cep '+ cep)

//Cuidado ao tentar desestruturar um dado aninhado, tem que ter certeza que o caminho está de fato setado
/**
 * Código com erro
 * const { conta: { ag, num } } = pessoa
 */