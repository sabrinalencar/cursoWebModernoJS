//Chamando uma função a partir do call e apply
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())//18
console.log(produto.getPreco()) //chamando funcao a partir de um obj

const carro = { preco: 49998, desc: 0.20 }
console.log(getPreco.call(carro))//39.998.4
console.log(getPreco.apply(carro))

//Diferença na passagem de params
console.log(getPreco.call(carro, 0.17, '$')) //contexto, params
console.log(getPreco.apply(carro, [0.17, '$']))//contexto, [params]