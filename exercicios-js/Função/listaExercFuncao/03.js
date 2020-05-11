function calculaExp(base, exp) {
    //metodo antigo
    let resultado = Math.pow(base, exp)
    //metodo novo
    resultado = base ** exp
    return resultado
}

console.log(calculaExp(2,2))
console.log(calculaExp(3,2))
console.log(calculaExp(4,2))
console.log(calculaExp(5,3))

