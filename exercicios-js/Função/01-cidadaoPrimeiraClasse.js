//Funcao em JS é First-Class Object (Citizens)
//A linguagem trata a funcao como um dado  Higher-order function
 
// criar de forma literal
function f1() { }

// Armezenar em uma variavel
const f2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, f1, f2]
console.log(array[0](2, 3))

//Armazenar em um atributo (de um objeto)
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun() //executando de fato a funcao que foi passada como param
}

run(function param() { console.log('Executando..')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4) //como o resultado de soma(2, 3) é uma funcao, ja posso passar o param da mesma de forma literal

// outra opcao
const cincoMais = soma(2, 3)
cincoMais(4)