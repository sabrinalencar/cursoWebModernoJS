// rest -> junta todos os parâmetros numa mesma estrutura
// spread -> espalha

// usar spread com obj
const funcionario = { nome: 'Maria', salario: 1233.98 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)