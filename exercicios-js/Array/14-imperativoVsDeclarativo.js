const alunos = [
    { nome: 'Val', nota: 8.5 },
    { nome: 'Cleyton', nota: 9.4 }
]

// Imperativo 
// Ensina-se exatamente os passos com todos os detalhes (Foco maior em _como_ tem que ser feito do que propriamente _o que_ tem que ser feito)
let total1 = 0
for(let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo (Abordagem muito mais interessante)
// Diz o que tem que ser feito e internamente elas são feitas
const getNota = alunos => alunos.nota
const soma = (total, nota) => total + nota
  
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)