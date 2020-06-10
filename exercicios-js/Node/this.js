// Dentro do módulo, this === module.exports
console.log(this === global)// false
console.log(this === module)// false

console.log(this === module.exports)// true
console.log(this === exports)// true
 
// Dentro da função, this === global
function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports)// false
    console.log(this === module.exports)// false
    console.log(this === global)// true

    // this.perigo = '..' está colocando no escopo global
} 

logThis()