// Arrow Function (sempre anonima atribuida a uma variavel)
const soma = (a, b) => a + b
console.log(soma(2, 3))
const subtracao = (a, b) => {
    return a - b
}
console.log(subtracao(2, 3))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parâmetro default
function log(texto = 'Node') {
    console.log(texto)
}

log()//node
log(undefined)//node
log(null)//null
log('Passando parâmetro')

// operador rest (ou spread)
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5)) // 15