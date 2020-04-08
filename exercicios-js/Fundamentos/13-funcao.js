//function sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)//5
imprimirSoma(2)//NaN (2+undefined)
imprimirSoma(2,10,3,4,7)//12 ignora o resto
imprimirSoma()//Nan

//function com retorno 
function soma(a, b = 1) {
    return a + b
}//tratamento com valor padrão

console.log(soma(2,6))//8
console.log(soma(2))//3