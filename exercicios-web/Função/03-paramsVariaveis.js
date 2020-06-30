//Pode passar parametros mesmo pra uma funcao sem parametros e resgatá-los dentro da mesma.

//utilizando o array arguments
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}

console.log(soma())//0
console.log(soma(1))//1
console.log(soma(1,2,5,9,10,11))//38
console.log(soma(1,2,'teste'))//soma e concatena "3teste"
console.log(soma('a','b','c'))//0abc
