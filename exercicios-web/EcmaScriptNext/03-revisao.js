// ES8: Object.values(valor)/ Object.estries(chave, valor)
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj))// [ 1, 2, 3 ]
console.log(Object.entries(obj))// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// Melhorias na Notação Literal
const nome = 'Ana'
const pessoa = {
    nome, // nome: nome
    ola() { // ola: function() {return 'oi'}
        return 'Oi'
    }
}
console.log(pessoa.nome, pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Auau'
    }
}
console.log(new Cachorro().falar())