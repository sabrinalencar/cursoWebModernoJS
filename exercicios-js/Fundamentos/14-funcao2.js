//Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// Armazendo uma funcao arrow em uma variavel (=> arrow function)
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

//retorno implicito (sem aspas são pra funcoes c apenas uma linha de código)
const subt = (a, b) => a - b

console.log(subt(3,2))