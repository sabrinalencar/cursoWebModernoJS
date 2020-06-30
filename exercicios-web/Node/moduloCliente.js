//Cliente -> usa outros módulos 

const moduloA = require('./moduloA') // caminho relativo ./ mesma pasta
const moduloB = require('./moduloB') // em arquivos JS não é necessário colocar o .js

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia())
console.log(moduloB.boaNoite)
console.log(moduloB)