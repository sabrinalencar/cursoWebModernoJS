let valor //nao inicializada
console.log(valor)//undefined
// console.log(valor2) //ERRO is not defined, nem foi declarada

valor = null //ausencia de valor sempre usado para zerar o valor de uma variavel 

// console.log(valor.toString()) //ERRO

const produto = {}
console.log(produto.preco) //undefined
console.log(produto) // {}
produto.preco = 3.5
console.log(produto)