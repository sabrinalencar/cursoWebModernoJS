console.log(module.exports)// {}
console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Testando'
}
console.log(module.exports) // continua o mesmo { a: 1, b: 2, c: 3 }

//Atribuindo novo objeto -> usa-se module.exports
module.exports = { mudei: true }