const filhas = ['Priscila', 'Carol']
const filhos = ['Rodrigo', 'Teo']
const todos = filhas.concat(filhos, 'Lis')
console.log(todos, filhas, filhos) // arrays originais não são alterados

// posso usar a notação ponto pois apesar de ser um array é um objeto
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))