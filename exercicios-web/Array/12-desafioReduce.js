// Reduce tem essa função de agregar os elementos
const alunos = [
    { nome:'João', nota: 9.2, bolsista: false },
    { nome:'Leandro', nota: 7.3, bolsista: true },
    { nome:'Arthur', nota: 7.3, bolsista: false },
    { nome:'Rafael', nota: 8.2, bolsista: true },
]

const arrayBoolean = alunos.map(aluno => aluno.bolsista)

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = arrayBoolean.reduce(function(resultado, bolsista){
    return resultado && bolsista 
})
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = arrayBoolean.reduce((resultado, bolsista) => resultado || bolsista)
console.log(algumBolsista)