const alunos = [
    { nome:'João', nota: 9.2 },
    { nome:'Leandro', nota: 7.3 },
    { nome:'Arthur', nota: 7.3 },
    { nome:'Rafael', nota: 8.2 },
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)