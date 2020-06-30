let dobro = function (a) {
    return 2 * a
}

//funcao arrow sempre é anonima, precisa armazená-la em uma var

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' //beneficio da sintaxe reduzida
console.log(ola())

