const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))//todos atrib de pessoa
console.log(Object.values(pessoa))//lista de valores
console.log(Object.entries(pessoa))// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

// Usando operador destructured
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

//Além de definir o atributo podemos definir algumas características dele 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //pode ser listada
    writable: false, //não pode ser reescrita
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)//01/01/2019

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2) //concatena os objetos para o destino, sobrescreve os atributos de mesmo nome

Object.freeze(obj)
obj.c = 1234
console.log(obj)