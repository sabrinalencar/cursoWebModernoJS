const prod1 = {} //forma literal de criar obj vazio
prod1.nome = "Celular Ultra"
prod1.preco = 3098.99
prod1['Desconto Legal'] = 0.4//evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90, 
    preco:80//sobrescreve não pode ter chaves iguais
}
console.log(prod2)
//Transformando em JSON (javascript object notation)
// {"nome":"Camisa Polo", "preco": "79.90"}