// obj -> JSON (JSON.stringify())
// JSON -> obj (JSON.parse())

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

// ERRO console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "num": 1, "nome": "Joao", "booleano": true, "d": {}, "e": [] }'))

//Site JSON validator https://jsonlint.com/