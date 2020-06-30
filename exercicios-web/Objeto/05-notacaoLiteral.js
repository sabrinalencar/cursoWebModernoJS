const a = 1
const b = 2 
const c = 3

//antes do ES6
const obj1 = { a: a, b: b, c: c }
const obj2 = { a, b, c } //nova sintaxe
console.log(obj1, obj2)

const nomeAtrib = 'nota'
const valorAtrib = 7.87

const obj3 = {}
obj3[nomeAtrib] = valorAtrib
console.log(obj3)

const obj4 = { [nomeAtrib] : valorAtrib }
console.log(obj4)

const obj5 = {
    funcao1: function() {
        //...
    },
    funcao2 () {
        //ES6 forma reduzida de definir uma funcao
    }
}
console.log(obj5)